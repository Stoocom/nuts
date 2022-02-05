import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BurgerMenu from './BurgerMenu';
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { getAuth } from "../store/userSelector";
import { authOn } from "../store/userReducer";
import store from "../store";

const useStyles = makeStyles((theme) => ({
  buttonsGroup: {
    flex: '8',
    marginLeft: '70px',
    marginRight: '70px',
    display: 'flex',
    order: 2,
    fontSize: 18,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  buttonsLeftGroup: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      flex: 2
    }
  },
  burgerLink: {
    width: '65%',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginTop: '6px',
    },
  },
  personalLeftLink: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginTop: '6px'
    }
  },
  personalRightLink: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  centralHomeLink: {
    flex: 2,
    order: 1,
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'start',
    marginBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      flex: 6,
      justifyContent: 'center'
    }
  },
  rightlinks: {
    flex: 2,
    order: 3,
    marginTop: '6px',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flex: 4,
    }
  },
  buttonMinWidth: {
    minWidth: '40px',
  }
}));

function Header() {
  const { buttonsLeftGroup, burgerLink, buttonsGroup, personalRightLink,
    personalLeftLink, centralHomeLink, buttonMinWidth } = useStyles();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const { isAuth } = useSelector(getAuth, shallowEqual);

  console.log(isAuth);

  useEffect(() => {
    console.log('Header ' + isAuth);
    const userWithToken = JSON.parse(localStorage.getItem("user"));
    console.log(userWithToken);
    if (userWithToken) {
      setCurrentUser(userWithToken);
      store.dispatch(authOn());
    }
  }, []);

  return (
    <>
      <AppBar position='static' style={{ background: '#FFFFFF', padding: '0 calc(50% - 585px)' }} >
        <Toolbar style={{ display: 'flex', minHeight: '100px', color: '#800000', padding: 0, justifyContent: 'space-between' }}>
          <Box className={buttonsLeftGroup}>
            <Button className={`${burgerLink} ${buttonMinWidth}`} onClick={() => setIsOpenBurgerMenu(true)}>
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="21" y2="1" stroke="black" strokeWidth="2" />
                <line y1="8" x2="21" y2="8" stroke="black" strokeWidth="2" />
                <line y1="15" x2="21" y2="15" stroke="black" strokeWidth="2" />
              </svg>
            </Button>
            <Button className={`${personalLeftLink} ${buttonMinWidth}`}>
              <svg width="21" height="25" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4989 16.8953C17.742 16.8953 21.1943 13.1056 21.1943 8.44764C21.1943 2.99994 18.4615 0 13.4989 0C8.60761 0 5.80347 3.07913 5.80347 8.44764C5.80347 13.1056 9.25574 16.8953 13.4989 16.8953ZM13.4989 0.891778C19.0018 0.891778 20.157 5.00038 20.157 8.44764C20.157 12.614 17.1702 16.0035 13.4989 16.0035C9.82752 16.0035 6.84081 12.614 6.84081 8.44764C6.84081 5.62534 7.70554 0.891778 13.4989 0.891778Z" fill="black" />
                <path d="M26.9917 24.7707C26.8756 20.4224 22.137 15.7402 21.9353 15.5433L21.3569 14.9783L21.059 15.6867C21.0415 15.7281 19.254 19.811 13.6001 19.8124H13.4963H13.4009C7.76521 19.8124 6.01252 15.8536 5.94032 15.686L5.64074 14.9811L5.06397 15.544C4.86231 15.7409 0.123734 20.4231 0.00838129 24.7721C-0.0978426 28.7837 0.829956 29.5571 1.41336 29.6619L25.5544 29.6698L25.6083 29.6598C26.1702 29.5556 27.0971 28.7823 26.9917 24.7707ZM1.66481 28.7773C1.49718 28.5982 0.965226 27.7878 1.04489 24.7907C1.13037 21.5375 4.23161 17.8683 5.33866 16.6605C6.176 17.9675 8.5121 20.7028 13.4009 20.7028H13.4955H13.5992C18.4864 20.7028 20.8241 17.9675 21.6606 16.6605C22.766 17.8676 25.8673 21.5375 25.9544 24.7907C26.0341 27.7878 25.5013 28.5982 25.3336 28.7773H1.66481Z" fill="black" />
              </svg>
            </Button>
          </Box>
          <Box className={centralHomeLink}>
            <svg width="150" height="50.3" viewBox="0 0 179 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_69_292)">
                <path d="M89.1528 6.22226C88.9165 5.95093 88.6841 5.68155 88.4555 5.41022L88.4263 5.37314C88.2876 5.17794 88.1606 4.9964 88.0473 4.81681C85.3364 7.14166 83.1372 9.76126 82.0063 12.5234C80.9907 15.0005 80.8442 17.5986 81.9809 20.1909C82.0244 20.2889 82.0401 20.397 82.0264 20.5034C82.0126 20.6098 81.9699 20.7103 81.9028 20.794C81.5845 21.1844 81.5239 21.5748 81.6216 21.852C81.661 21.9713 81.7279 22.0796 81.8169 22.1683C81.9087 22.2591 82.0213 22.3261 82.145 22.3635C82.3101 22.4023 82.4824 22.3976 82.6451 22.3497C82.8078 22.3017 82.9552 22.2123 83.0727 22.0902C83.1547 22.0147 83.2564 21.9642 83.3661 21.9445C83.4758 21.9248 83.5888 21.9367 83.6919 21.9789C86.2446 23.0154 88.8286 23.1345 91.4516 22.1526C93.979 21.204 96.5591 19.2363 99.2016 16.0877C98.7326 15.7982 98.2837 15.4773 97.8579 15.1273C97.0747 14.4705 96.3294 13.7699 95.6255 13.0289C94.7993 12.2774 93.9595 11.4673 93.145 10.6533C91.7382 9.24829 90.4076 7.76916 89.1587 6.22226H89.1528ZM103.79 1.36761C103.602 2.79143 102.869 4.08694 101.745 4.98078C101.476 5.19652 101.192 5.39225 100.895 5.56639C101.603 6.48486 102.208 7.47858 102.698 8.52954C103.227 9.65585 103.854 11.2858 103.977 12.824C104.073 13.9952 103.883 15.1234 103.174 15.996C102.405 16.9408 101.391 17.0169 100.295 16.607C97.4556 20.0445 94.6489 22.1956 91.8716 23.2438C89.061 24.296 86.2973 24.2198 83.5766 23.1872C83.3256 23.3632 83.0386 23.4815 82.7364 23.5335C82.4341 23.5854 82.1241 23.5699 81.8286 23.4878C81.5259 23.4029 81.2475 23.2478 81.0161 23.035C80.7829 22.8165 80.6066 22.5444 80.5024 22.2424C80.4008 21.9289 80.372 21.5963 80.418 21.27C80.464 20.9436 80.5837 20.632 80.768 20.3587C79.6333 17.5459 79.8208 14.7487 80.9126 12.0822C82.1489 9.05854 84.5532 6.22226 87.4927 3.73735C87.4185 3.54717 87.3597 3.35134 87.3169 3.15175C87.2315 2.82171 87.225 2.47623 87.298 2.14323C87.3709 1.81023 87.5212 1.49905 87.7368 1.23487C88.5513 0.243246 89.7524 -0.0573638 91.0356 0.0109566C92.772 0.102701 94.6645 0.879602 95.8384 1.46325C97.3014 2.18235 98.6347 3.13952 99.7837 4.29563C99.8305 4.24487 99.8774 4.19412 99.9223 4.14142C100.654 3.30159 101.17 2.29676 101.426 1.2134C101.455 1.05365 101.522 0.902981 101.62 0.773479C101.718 0.643978 101.845 0.539257 101.991 0.467728C102.173 0.375955 102.373 0.3272 102.577 0.325231C102.779 0.322606 102.979 0.365295 103.163 0.45016C103.321 0.520782 103.461 0.628634 103.569 0.764563C103.677 0.900492 103.751 1.06049 103.784 1.23096C103.792 1.2774 103.792 1.32507 103.784 1.37151L103.79 1.36761ZM99.8149 6.111C99.0918 6.40913 98.3434 6.6417 97.5786 6.80591C97.475 6.84034 97.362 6.83223 97.2643 6.78336C97.1667 6.73449 97.0925 6.64886 97.0581 6.54532C97.0236 6.44178 97.0318 6.3288 97.0807 6.23124C97.1296 6.13369 97.2152 6.05954 97.3188 6.02511C97.8817 5.76868 98.4153 5.4526 98.9106 5.08229C97.8588 4.0383 96.6428 3.1738 95.311 2.5232C94.2309 1.98444 92.5005 1.27001 90.9751 1.18997C90.0395 1.13922 89.1841 1.33442 88.6489 1.98054C88.5495 2.11118 88.4819 2.26313 88.4514 2.4244C88.4209 2.58566 88.4283 2.75181 88.4731 2.9097C88.5272 3.15395 88.6112 3.39062 88.7231 3.61437C89.1341 4.24847 89.5767 4.86152 90.0493 5.45122C90.6417 6.13442 91.2427 6.80006 91.852 7.44813C92.6984 8.35907 93.5858 9.26285 94.5141 10.1595C94.7095 10.343 94.9888 10.6514 95.3364 11.0203C95.6509 11.358 96.018 11.7484 96.4184 12.1603C97.6782 13.3323 99.0187 14.4144 100.43 15.3987C101.18 15.7383 101.834 15.7715 102.25 15.2581C102.739 14.6589 102.864 13.8195 102.791 12.9157C102.68 11.5376 102.108 10.0541 101.62 9.01169C101.136 7.96633 100.527 6.98321 99.8071 6.08367L99.8149 6.111Z" fill="black" />
              </g>
              <path d="M123.214 16H178V59H1V16H56.9898" stroke="black" />
              <path d="M36.88 37.224C37.616 37.384 38.1813 37.704 38.576 38.184C38.9813 38.6533 39.184 39.2613 39.184 40.008C39.184 40.968 38.8267 41.7093 38.112 42.232C37.408 42.744 36.3627 43 34.976 43H29.824V31.8H34.656C35.904 31.8 36.8693 32.0507 37.552 32.552C38.2453 33.0533 38.592 33.7627 38.592 34.68C38.592 35.2987 38.4373 35.8267 38.128 36.264C37.8293 36.6907 37.4133 37.0107 36.88 37.224ZM31.008 32.776V36.84H34.576C35.4827 36.84 36.1813 36.6693 36.672 36.328C37.1627 35.976 37.408 35.4693 37.408 34.808C37.408 34.1467 37.1627 33.6453 36.672 33.304C36.1813 32.952 35.4827 32.776 34.576 32.776H31.008ZM34.96 42.024C35.9627 42.024 36.72 41.8533 37.232 41.512C37.744 41.1707 38 40.6373 38 39.912C38 38.5147 36.9867 37.816 34.96 37.816H31.008V42.024H34.96ZM46.7825 43.096C45.6732 43.096 44.6652 42.8507 43.7585 42.36C42.8625 41.8587 42.1585 41.176 41.6465 40.312C41.1452 39.448 40.8945 38.4773 40.8945 37.4C40.8945 36.3227 41.1452 35.352 41.6465 34.488C42.1585 33.624 42.8625 32.9467 43.7585 32.456C44.6652 31.9547 45.6732 31.704 46.7825 31.704C47.8918 31.704 48.8892 31.9493 49.7745 32.44C50.6705 32.9307 51.3745 33.6133 51.8865 34.488C52.3985 35.352 52.6545 36.3227 52.6545 37.4C52.6545 38.4773 52.3985 39.4533 51.8865 40.328C51.3745 41.192 50.6705 41.8693 49.7745 42.36C48.8892 42.8507 47.8918 43.096 46.7825 43.096ZM46.7825 42.04C47.6678 42.04 48.4678 41.8427 49.1825 41.448C49.8972 41.0427 50.4572 40.488 50.8625 39.784C51.2678 39.0693 51.4705 38.2747 51.4705 37.4C51.4705 36.5253 51.2678 35.736 50.8625 35.032C50.4572 34.3173 49.8972 33.7627 49.1825 33.368C48.4678 32.9627 47.6678 32.76 46.7825 32.76C45.8972 32.76 45.0918 32.9627 44.3665 33.368C43.6518 33.7627 43.0865 34.3173 42.6705 35.032C42.2652 35.736 42.0625 36.5253 42.0625 37.4C42.0625 38.2747 42.2652 39.0693 42.6705 39.784C43.0865 40.488 43.6518 41.0427 44.3665 41.448C45.0918 41.8427 45.8972 42.04 46.7825 42.04ZM64.6684 31.8V43H63.6924L56.4924 33.912V43H55.3084V31.8H56.2844L63.5004 40.888V31.8H64.6684ZM79.5355 40.008H73.2955L71.9515 43H70.7195L75.8395 31.8H77.0075L82.1275 43H80.8795L79.5355 40.008ZM79.1035 39.048L76.4155 33.032L73.7275 39.048H79.1035ZM88.1723 31.8C89.6016 31.8 90.7216 32.1413 91.5323 32.824C92.3429 33.5067 92.7483 34.4453 92.7483 35.64C92.7483 36.8347 92.3429 37.7733 91.5323 38.456C90.7216 39.128 89.6016 39.464 88.1723 39.464H85.1643V43H83.9803V31.8H88.1723ZM88.1403 38.424C89.2496 38.424 90.0976 38.184 90.6843 37.704C91.2709 37.2133 91.5642 36.5253 91.5642 35.64C91.5642 34.7333 91.2709 34.04 90.6843 33.56C90.0976 33.0693 89.2496 32.824 88.1403 32.824H85.1643V38.424H88.1403ZM99.5004 31.8C100.93 31.8 102.05 32.1413 102.86 32.824C103.671 33.5067 104.076 34.4453 104.076 35.64C104.076 36.8347 103.671 37.7733 102.86 38.456C102.05 39.128 100.93 39.464 99.5004 39.464H96.4924V43H95.3084V31.8H99.5004ZM99.4684 38.424C100.578 38.424 101.426 38.184 102.012 37.704C102.599 37.2133 102.892 36.5253 102.892 35.64C102.892 34.7333 102.599 34.04 102.012 33.56C101.426 33.0693 100.578 32.824 99.4684 32.824H96.4924V38.424H99.4684ZM114.557 41.976V43H106.637V31.8H114.317V32.824H107.821V36.808H113.613V37.816H107.821V41.976H114.557ZM119.516 32.824H115.58V31.8H124.636V32.824H120.7V43H119.516V32.824ZM126.527 31.8H127.711V43H126.527V31.8ZM133.531 32.824H129.595V31.8H138.651V32.824H134.715V43H133.531V32.824ZM148.463 41.976V43H140.543V31.8H148.223V32.824H141.727V36.808H147.519V37.816H141.727V41.976H148.463Z" fill="black" />
              <defs>
                <clipPath id="clip0_69_292">
                  <rect width="24" height="24" fill="white" transform="translate(80)" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box className={buttonsGroup}>
            <Link color="textPrimary" to={"/catalog"}>
              Каталог
            </Link>
            <Link color="textPrimary" to={"/login"}>
              О нас
            </Link>
            <Link color="textPrimary" to={"/signup"}>
              Акции
            </Link>
            <Link color="textPrimary" to={"/catalog"}>
              Доставка
            </Link>
          </Box >
          <Box style={{ flex: 2, order: 3, marginTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
            <Button className={buttonMinWidth}>
              <svg width="21" height="23" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8416 26.1278L17.9311 17.8851C19.5734 15.9842 20.5831 13.4782 20.5831 10.7239C20.5831 4.81107 15.966 0 10.2915 0C4.61709 0 0 4.81107 0 10.7239C0 16.6366 4.61714 21.4477 10.2916 21.4477C12.9349 21.4477 15.3398 20.3956 17.1642 18.6832L25.0746 26.9259C25.1808 27.0366 25.3194 27.0918 25.4581 27.0918C25.5968 27.0918 25.7354 27.0366 25.8416 26.927C26.0528 26.7058 26.0528 26.349 25.8416 26.1278ZM10.2916 20.3189C5.21407 20.3189 1.08336 16.0147 1.08336 10.7239C1.08336 5.43312 5.21402 1.12886 10.2916 1.12886C15.3691 1.12886 19.4998 5.43307 19.4998 10.7239C19.4998 16.0146 15.3691 20.3189 10.2916 20.3189Z" fill="black" />
              </svg>
            </Button>
            {
              isAuth
                ? 
                <Link to={"/profile"} style={{ display: 'flex', alignItems: 'center' }}>
                  <svg width="21" height="23" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4989 16.8953C17.742 16.8953 21.1943 13.1056 21.1943 8.44764C21.1943 2.99994 18.4615 0 13.4989 0C8.60761 0 5.80347 3.07913 5.80347 8.44764C5.80347 13.1056 9.25574 16.8953 13.4989 16.8953ZM13.4989 0.891778C19.0018 0.891778 20.157 5.00038 20.157 8.44764C20.157 12.614 17.1702 16.0035 13.4989 16.0035C9.82752 16.0035 6.84081 12.614 6.84081 8.44764C6.84081 5.62534 7.70554 0.891778 13.4989 0.891778Z" fill="black" />
                    <path d="M26.9917 24.7707C26.8756 20.4224 22.137 15.7402 21.9353 15.5433L21.3569 14.9783L21.059 15.6867C21.0415 15.7281 19.254 19.811 13.6001 19.8124H13.4963H13.4009C7.76521 19.8124 6.01252 15.8536 5.94032 15.686L5.64074 14.9811L5.06397 15.544C4.86231 15.7409 0.123734 20.4231 0.00838129 24.7721C-0.0978426 28.7837 0.829956 29.5571 1.41336 29.6619L25.5544 29.6698L25.6083 29.6598C26.1702 29.5556 27.0971 28.7823 26.9917 24.7707ZM1.66481 28.7773C1.49718 28.5982 0.965226 27.7878 1.04489 24.7907C1.13037 21.5375 4.23161 17.8683 5.33866 16.6605C6.176 17.9675 8.5121 20.7028 13.4009 20.7028H13.4955H13.5992C18.4864 20.7028 20.8241 17.9675 21.6606 16.6605C22.766 17.8676 25.8673 21.5375 25.9544 24.7907C26.0341 27.7878 25.5013 28.5982 25.3336 28.7773H1.66481Z" fill="black" />
                  </svg>
                </Link>
                :
                <Link to={"/login"} style={{ display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="21" height="21" viewBox="0 0 612 612">
                    <g>
                      <g id="_x36__30_">
                        <g>
                          <path d="M331.685,425.378c-7.478,7.479-7.478,19.584,0,27.043c7.479,7.478,19.584,7.478,27.043,0l131.943-131.962
                            c3.979-3.979,5.681-9.276,5.412-14.479c0.269-5.221-1.434-10.499-5.412-14.477L358.728,159.56
                            c-7.459-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l100.272,100.272H19.125C8.568,286.875,0,295.443,0,306
                            c0,10.557,8.568,19.125,19.125,19.125h412.832L331.685,425.378z M535.5,38.25H153c-42.247,0-76.5,34.253-76.5,76.5v76.5h38.25
                            v-76.5c0-21.114,17.117-38.25,38.25-38.25h382.5c21.133,0,38.25,17.136,38.25,38.25v382.5c0,21.114-17.117,38.25-38.25,38.25H153
                            c-21.133,0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0,42.247,34.253,76.5,76.5,76.5h382.5c42.247,0,76.5-34.253,76.5-76.5
                            v-382.5C612,72.503,577.747,38.25,535.5,38.25z" fill="#4f4a4a"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
            }
            <Button className={buttonMinWidth}>
              <svg width="21" height="23" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9712 6.98603H17.692V5.49614C17.692 2.46555 15.3869 0 12.5533 0C9.71984 0 7.41485 2.46555 7.41485 5.49614V6.98603H3.72788C3.41698 6.98603 3.1648 7.25552 3.1648 7.58829L0 27.703C0 28.0358 0.251958 28.3054 0.563361 28.3054H25.462C25.7732 28.3054 26.0255 28.0358 26.0255 27.703L22.5344 7.58829C22.5344 7.25546 22.2823 6.98603 21.9712 6.98603ZM8.54079 5.49614C8.54079 3.12965 10.341 1.20458 12.5531 1.20458C14.7656 1.20458 16.5657 3.13001 16.5657 5.49614V6.98603H8.54079V5.49614ZM24.8993 27.1008H1.12622L4.29062 8.19031H7.41435V10.8425C7.14267 11.0371 6.96405 11.3678 6.96405 11.7435C6.96405 12.3421 7.41732 12.8276 7.97743 12.8276C8.53687 12.8276 8.99098 12.3425 8.99098 11.7435C8.99098 11.3675 8.81186 11.0371 8.54029 10.8425V8.19031H16.566V10.8425C16.2943 11.0371 16.1154 11.3678 16.1154 11.7435C16.1154 12.3421 16.5689 12.8276 17.129 12.8276C17.6885 12.8276 18.1425 12.3425 18.1425 11.7435C18.1425 11.3675 17.9631 11.0371 17.6917 10.8425V8.19031H21.408L24.8993 27.1008Z" fill="black" />
              </svg>
            </Button>
          </Box >
        </Toolbar>
      </AppBar>
      {
        isOpenBurgerMenu
          ?
          <BurgerMenu setIsOpenBurgerMenu={setIsOpenBurgerMenu}
          />
          : <div></div>
      }
    </>
  );
}

export default Header;
