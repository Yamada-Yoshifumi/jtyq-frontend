import { FAQs } from "./components/FAQs";
import { News } from "./components/News";
import { OurTeam } from "./components/OurTeam";
import { ContactUs } from "./components/ContactUs";
import { Careers } from "./components/Careers";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/faqs',
    element: <FAQs />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/ourteam',
    element: <OurTeam />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
  {
    path: '/careers',
    element: <Careers />
  }
];

export default AppRoutes;
