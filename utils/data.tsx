// icons
import {
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  CircleStackIcon,
  IdentificationIcon,
  ClipboardDocumentIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const useNavLinks = (
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string,
  title6: string,
  title7: string
) => {
  const navLinks = [
    {
      id: "home",
      title: title1,
    },
    {
      id: "about",
      title: title2,
    },
    {
      id: "education",
      title: title3,
    },
    {
      id: "servcies",
      title: title4,
    },
    {
      id: "testomial",
      title: title5,
    },
    {
      id: "request",
      title: title6,
    },
    {
      id: "regest",
      title: title7,
    },
  ];
  return { navLinks };
};

export const useEducationData = (
  supTile1: string,
  supTile2: string,
  supTile3: string
) => {
  const educationData = [
    {
      id: "ed-1",
      title: supTile1,
      icon: <BriefcaseIcon className="w-8 h-8 text-white" />,
      animateY: 100,
      supTitle1: "Level 4",
      supDesc1: [
        "The Business Enviroment",
        "Resource Management",
        "Communication Skills",
        "People in Organization",
        "Applying Promotional Techniques",
        "Corporate Social Responsibility",
        "Finance for Management",
        "Customer Relationship",
      ],
      supTitle2: "Level 5",
      supDesc2: [
        "Business Organizations in Clobal Context",
        "Research Project",
        "People Management",
        "Finance for Managers",
        "Managing Communication",
        "Marketing pronciples and practice",
        "Operations Management",
        "Business Ethics",
      ],
    },
    {
      id: "ed-2",
      title: supTile2,
      icon: <DocumentMagnifyingGlassIcon className="w-8 h-8 text-white" />,
      animateY: 130,
      supTitle1: "Level 4",
      supDesc1: [
        "Health and Social care in context",
        "Communication Skills for Health and Social care Management",
        "People in Organizations",
        "Corporate Social responsibility",
        "Rosource Management",
        "Planning a work-based Team Project",
        "Finance for Managers",
        "Administrative Services",
      ],
      supTitle2: "Level 5",
      supDesc2: [
        "Facilitating Change in Health and Social Care",
        "Managing Communication",
        "People Management",
        "Research Project",
        "Working with Multi-Disciplinary Teams",
        "Corporate Social Responsibility",
        "Managing Stakeholder Engagement",
        "Managing Quality in Health and Social Care",
      ],
    },
    {
      id: "ed-3",
      title: supTile3,
      icon: <CircleStackIcon className="w-8 h-8 text-white" />,
      animateY: 160,
      supTitle1: "Level 4",
      supDesc1: [
        "IT and Society",
        "Computer Systems and Software",
        "Computer Programming",
        "Relational Database Systems",
        "Software Engineering",
        "Systems Analysis and Design",
        "E-commerce Applications",
        "Human Computer Interaction",
        "Information Systems Theory and Practice",
        "Management Information Systems",
      ],
      supTitle2: "Level 5",
      supDesc2: [
        "Cyber Security",
        "Database Design and Development",
        "Web Based Development",
        "Network Design",
        "Ethical, Legal and Regulatory Issues and Professional Responsibilities in IT",
        "Strategic Management Information Systems",
        "Innovative Technologies in Cumputing",
        "Computing Research Methods",
        "Managing a Computing Project",
        "Software Development Methodologies",
      ],
    },
  ];
  return { educationData };
};

export const useServciesData = (
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string,
  title6: string,
  title7: string,
  title8: string,
  title9: string,
  title10: string,
  title11: string,
  title12: string
) => {
  const servciesData = [
    {
      id: "1",
      animateY: 100,
      title: title1,
    },
    {
      id: "2",
      animateY: 100,
      title: title2,
    },
    {
      id: "3",
      animateY: 120,
      title: title3,
    },
    {
      id: "4",
      animateY: 120,
      title: title4,
    },
    {
      id: "5",
      animateY: 140,
      title: title5,
    },
    {
      id: "6",
      animateY: 140,
      title: title6,
    },
    {
      id: "7",
      animateY: 160,
      title: title7,
    },
    {
      id: "8",
      animateY: 160,
      title: title8,
    },
    {
      id: "9",
      animateY: 180,
      title: title9,
    },
    {
      id: "10",
      animateY: 180,
      title: title10,
    },
    {
      id: "11",
      animateY: 200,
      title: title11,
    },
    {
      id: "12",
      animateY: 200,
      title: title12,
    },
  ];

  return { servciesData };
};

export const useTestomoinalData = (
  title1: string,
  subTitle1: string,
  desc1: string,
  title2: string,
  subTitle2: string,
  desc2: string,
  title3: string,
  subTitle3: string,
  desc3: string,
  title4: string,
  subTitle4: string,
  desc4: string,
  title5: string,
  subTitle5: string,
  desc5: string,
  title6: string,
  subTitle6: string,
  desc6: string
) => {
  const testomoinalData = [
    {
      id: "test-1",
      title: title1,
      suptitle: subTitle1,
      desc: desc1,
    },
    {
      id: "test-2",
      title: title2,
      suptitle: subTitle2,
      desc: desc2,
    },
    {
      id: "test-3",
      title: title3,
      suptitle: subTitle3,
      desc: desc3,
    },
    {
      id: "test-4",
      title: title4,
      suptitle: subTitle4,
      desc: desc4,
    },
    {
      id: "test-5",
      title: title5,
      suptitle: subTitle5,
      desc: desc5,
    },
    {
      id: "test-6",
      title: title6,
      suptitle: subTitle6,
      desc: desc6,
    },
  ];

  return { testomoinalData };
};

export const useRequestsData = (
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string,
  title6: string
) => {
  const requestsData = [
    {
      id: "req-1",
      title: title1,
      icon: <IdentificationIcon className="w-8 h-8 text-white" />,
    },
    {
      id: "req-2",
      title: title2,
      icon: <ClipboardDocumentIcon className="w-8 h-8 text-white" />,
    },
    {
      id: "req-3",
      title: title3,
      icon: <UserCircleIcon className="w-8 h-8 text-white" />,
    },
    {
      id: "req-4",
      title: title4,
      icon: <CheckBadgeIcon className="w-8 h-8 text-white" />,
    },
    {
      id: "req-5",
      title: title5,
      icon: <DocumentCheckIcon className="w-8 h-8 text-white" />,
    },
    {
      id: "req-6",
      title: title6,
      icon: <CurrencyDollarIcon className="w-8 h-8 text-white" />,
    },
  ];

  return { requestsData };
};

export const useFooterLinks = (
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string
) => {
  const footerLinks = [
    {
      id: "about",
      title: title1,
    },
    {
      id: "education",
      title: title2,
    },
    {
      id: "servcies",
      title: title3,
    },
    {
      id: "testomial",
      title: title4,
    },
    {
      id: "request",
      title: title5,
    },
  ];
  return { footerLinks };
};
