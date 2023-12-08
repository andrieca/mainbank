import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View
import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import ErrorPage from "./pages/errors/ErrorPage";

// eslint-disable-next-line no-unused-vars
import appStyle from "../scss/app.scss";
import Dashbord from "./pages/private/dashbord/Dashbord";
import Carousel from "./pages/public/carousel/Carousel";
import HomeLayout from "./layout/HomeLayout";
import PageTransactions from "./pages/private/pageTransactions/PageTransactions";
import PageContactsView from "./pages/private/pageContacts/PageContactsView";
import PageProfileView from "./pages/private/pageProfile/PageProfileView";
import PagesendMoneyView from "./pages/private/pageSendMoney/PagesendMoneyView";
import FooterBtnLayout from "./layout/FooterBtnLayout";
import PageRequestView from "./pages/private/pageRequestMoney/PageRequestView";
import PageAllRequests from "./pages/private/pageAllRequests/PageAllRequests";
import PagesendMoneySearch from "./pages/private/pageSendMoney/PagesendMoneySearch";
import PageRequestSearch from "./pages/private/pageRequestMoney/PageRequestSearch";
import PageSendRequests from "./pages/private/pageSendMoney/PageSendRequests";
import PageCard from "./pages/private/pageCard/PageCard";


function App() {
  const publicPages = [
    {
      element: <Carousel />,
      path: '/carousel'
    },
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/onboarding'
    },

  ];

  const PrivatePages = [
    {
      element: <PageTransactions />,
      path: '/transactions'
    },
    {
      element: <PageContactsView />,
      path: '/contacts'
    },

  ];

  const PrivateBtnPages = [
    {
      element: <PagesendMoneyView />,
      path: '/send_money/:id'
    },
  ]

  const HomePages = [
    // {
    //   element: <Profile />,
    //   path: '/profile'
    // },
    {
      element: <Dashbord />,
      path: '/dashbord'
    },
    {
      element: <PageProfileView />,
      // path: '/my_profile/:id'
      path: '/my_profile'

    },
  ]



  return (
    <Router>
      <Routes>
        <Route element={<PrivateLayout />}>
          {PrivatePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Carousel />} exact />
          {publicPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        <Route element={<HomeLayout />}>
          {HomePages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route>
        {/* <Route element={<FooterBtnLayout />}>
          {PrivateBtnPages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Route> */}
        <Route path="/send_money/:id" element={<PagesendMoneyView />} />
        <Route path="/send_money" element={<PagesendMoneySearch />} />
        <Route path="/send_requests_money" element={<PageSendRequests />} />
        <Route path="/request_money/:id" element={<PageRequestView />} />
        <Route path="/request_money" element={<PageRequestSearch />} />
        <Route path="/requests" element={<PageAllRequests />} />
        <Route path="/card" element={<PageCard/>}/>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
