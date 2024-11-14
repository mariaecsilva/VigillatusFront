import React from "react";
import { StyledButtonSidebar, StyledIcon, StyledSpanSidebar } from "./Style";

const SidebarButton = ({ icon, text, onClick, isActive }) => (
    <StyledButtonSidebar
        onClick={onClick}
        className={isActive ? 'active' : ''}
    >
        <StyledIcon src={icon} alt={text.toLowerCase()} />
        <StyledSpanSidebar className="sidebar-text">
            {text}
        </StyledSpanSidebar>
    </StyledButtonSidebar>
);

export default SidebarButton;
