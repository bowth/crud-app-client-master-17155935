import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <a href="/">
                        <span className="logo">N PANEL</span>
                    </a>

                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
