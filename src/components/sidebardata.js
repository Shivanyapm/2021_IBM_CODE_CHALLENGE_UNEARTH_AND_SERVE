import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import DetailsIcon from '@mui/icons-material/Details';
import PlusIcon from '@mui/icons-material/Add';

export const sidebardata = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/AdminHomePage",
    },
    {
        title: "Sponsor Details",
        icon: <GroupIcon />,
        link: "/sdetails",
    },

    {
        title: "Check eligibility",
        icon: <DetailsIcon />,
        link: "/eligibility",
    },
]