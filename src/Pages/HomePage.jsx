import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate("");

    useEffect(() => {
        const fetchUserName = async () => {
            const {
              data: { user },
            } = await supabase.auth.getUser();
          
            if (user && user.user_metadata) {
              const { first_name, last_name } = user.user_metadata;
              setUserName(`${first_name} ${last_name}`);
            }
          };

        fetchUserName();
    }, []);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if(error) {
            console.log("Error singing out:", error.message);
        }
        else {
            navigate("/");
        }
    }

    return (
        <div className="home-container">
            <div className="dashboard">
                <div className="welcome">
                    <h2>Welcome {userName ? userName : "User"}!</h2>
                </div>
                <div>
                    <h2>Dashboard</h2>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <i className="fas fa-book"></i> Lecture Summarizer
                    </li>
                    <li>
                        <i className="fas fa-pencil-alt"></i> Quizzes
                    </li>
                    <li>
                        <i className="fas fa-clock"></i> Study Timer
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
