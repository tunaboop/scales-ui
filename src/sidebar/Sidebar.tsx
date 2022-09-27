import React, {useEffect} from 'react';
import '../App.css';
import './Sidebar.css';


type SidebarProps = {
    children: React.ReactNode | React.ReactNode[]
}
function Sidebar(props: SidebarProps) {


    return (
        <aside className="sidebar">
            {props.children}
        </aside>
    );
}

export default Sidebar;
