// Real Time interactivity via Socket.io enabled Live Notifications✨//
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [socket, setSocket] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Connect to Socket.io server-now using deployed backend URL
    const newSocket = io('https://little-treasures-backend-a7xj.onrender.com', {
      withCredentials: true,
      transports: ['websocket', 'polling'] // Important for production
    });
    setSocket(newSocket);

    // Listen for new volunteer notifications
    newSocket.on('new-volunteer', (data) => {
      const newNotification = {
        ...data,
        id: Date.now(), // Unique ID for each notification
        visible: true
      };
      
      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]); // Keep last 5
      setVisible(true);
      
      // Auto-hide this specific notification after 5 seconds
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(notif => 
            notif.id === newNotification.id 
              ? { ...notif, visible: false } 
              : notif
          )
        );
      }, 5000);
    });

     // Add connection event handlers for debugging
    newSocket.on('connect', () => {
      console.log('✅ Connected to server successfully');
    });

    newSocket.on('connect_error', (error) => {
      console.error('❌ Socket connection error:', error);
    });

    newSocket.on('disconnect', (reason) => {
      console.log('🔌 Disconnected from server:', reason);
    });

    // Clean up on unmount
    return () => newSocket.close();
  }, []);

  // Remove notifications that have been hidden for more than 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prev => 
        prev.filter(notif => notif.visible || Date.now() - notif.id < 6000)
      );
      
      // Hide container if no visible notifications
      if (notifications.every(notif => !notif.visible)) {
        setVisible(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [notifications]);

  // Show container if there are any notifications
  useEffect(() => {
    if (notifications.length > 0) {
      setVisible(true);
    }
  }, [notifications.length]);

  if (!visible) {
    return null; // Don't render anything if no notifications
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80px', // Below the header so as not to block nav bar buttons
      right: '20px',
      width: '320px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 999,
      maxHeight: '400px',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out'
    }}>
      <div style={{
        padding: '12px 15px',
        background: '#2e7d32',
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span>🔔 Live Updates</span>
        <button
          onClick={() => setVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '0',
            width: '20px',
            height: '20px'
          }}
        >
          ×
        </button>
      </div>
      
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div 
              key={notification.id}
              style={{
                padding: '12px 15px',
                borderBottom: '1px solid #f0f0f0',
                fontSize: '14px',
                backgroundColor: notification.visible ? 'white' : '#f9f9f9',
                opacity: notification.visible ? 1 : 0,
                transition: 'all 0.5s ease-in-out',
                transform: notification.visible ? 'translateX(0)' : 'translateX(100%)'
              }}
            >
              <div style={{ 
                fontWeight: 'bold', 
                marginBottom: '4px',
                color: '#2e7d32',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>📍</span>
                {notification.message}
              </div>
              <div style={{ 
                color: '#666', 
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span>
                  Community growing in {notification.location}
                </span>
                <span>
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      
      {notifications.length > 0 && (
        <div style={{
          padding: '8px 15px',
          background: '#f8f9fa',
          borderTop: '1px solid #eee',
          fontSize: '11px',
          color: '#666',
          textAlign: 'center'
        }}>
          Notifications auto-hide in 5 seconds
        </div>
      )}
    </div>
  );
};

export default AdminNotifications;