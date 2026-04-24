import React, { useState, useRef } from 'react';

function Profile() {
    const [profile, setProfile] = useState({ 
        name: '', 
        role: '', 
        showCard: false 
    });
    const nameInputRef = useRef(null);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (profile.name.trim() === "") {
            nameInputRef.current.classList.add('input-error');
            setTimeout(() => nameInputRef.current.classList.remove('input-error'), 300);
            return;
        }
        setProfile({ ...profile, showCard: true });
    };

    return (
        <section className="container">
            <div className="form-box">
                <h3 className="glitter-text">Create Your Job Profile</h3>
                <form onSubmit={handleUpdate}>
                    <input 
                        ref={nameInputRef} 
                        type="text" 
                        placeholder="Full Name" 
                        value={profile.name} 
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        placeholder="Desired Role" 
                        value={profile.role} 
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })} 
                    />
                    <button type="submit">Update Profile</button>
                </form>
            </div>
            {profile.showCard && (
                <div className="profile-card">
                    <h3>User Profile</h3>
                    <hr />
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Role:</strong> {profile.role}</p>
                </div>
            )}
        </section>
    );
}

export default Profile;