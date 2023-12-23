import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import notfound from '../NotFound';
import { LoginSignup } from "pages/LoginPage/LoginSignup";
import colors from "tailwindcss/colors";

const LandingPageTwoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[1130px] md:px-5 relative w-full">
            <div className="h-[1130px] m-auto w-full">
              <div className="absolute h-[1130px] inset-y-[0] my-auto right-[0] w-[90%] md:w-full">
                <Img
                  className="absolute h-[1130px] inset-y-[0] my-auto object-cover right-[0]"
                  src="images/img_designer1.png"
                  alt="designerOne"
                />
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[28%] w-[47%]">
                  <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start pb-11 w-full">
                      <Text
                        className="leading-[66.00px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900 tracking-[1.00px]"
                        size="txtStapelBold50"
                      >
                        <span className="text-gray-900 font-stapel text-left font-bold">
                          <>
                            Submit an Event 
                            <br />
                            Happening At{" "}
                          </>
                        </span>
                        <span className="text-green-800 font-stapel text-left font-bold">
                          Farook
                        </span>
                      </Text>
                      <Text
                        className="leading-[30.00px] text-gray-700_01 text-lg w-[90%] sm:w-full"
                        size="txtRobotoRegular18"
                      >
                        Discover refined events effortlessly on farookflow.,
                        where sophistication meets seamless exploration. Stay
                        informed, connect strategically, and secure your spot at
                        the finest gatherings in Farook College. Elevate your
                        event engagement now
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[68%] md:w-full">
                      <div className="h-9 relative w-[47%] sm:w-full">
                        <div className="bg-green-800 h-9 m-auto rounded-[16px] w-full"></div>
                        <Text
                          className="absolute h-max inset-[0] justify-center m-auto text-base text-center text-white-A700 w-max"
                          size="txtRobotoMedium16"
                        ><button>
                          Submit An Event
                          </button>
                        </Text>
                      </div>
                      <div className="h-9 relative w-[47%] sm:w-full">
                        <div className="border-2 border-green-800 border-solid h-9 m-auto rounded-[16px] w-full"></div>
                        <a
                          href="javascript:"
                          className="absolute bottom-[19%] inset-x-[0] mx-auto text-base text-center text-green-800 w-max"
                        >
                          <Text size="txtRobotoMedium16Green800">
                            <button onClick={()=>navigate('/about')}><b>Learn More</b></button>
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-light_green-300 flex md:flex-col flex-row md:gap-10 gap-[251px] inset-x-[0] items-center justify-end mx-auto p-[13px] top-[0] w-full">
                <div className="flex md:flex-1 flex-row gap-[60px] items-start justify-center w-[29%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    About
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Contact
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Submit An Event
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row font-inter items-center justify-start mr-[43px] px-3.5 w-[15%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_account1.png"
                    alt="accountOne"
                  />
                  <div className="flex flex-col items-end justify-start">
                    <a
                      href="javascript:"
                      className="text-black-900 text-sm tracking-[-0.98px]"
                    >    <button onClick={()=>navigate('/loginsignup')} style={{ color: '#262626' }}>
                      <Text size="txtInterSemiBold14">Login</Text></button>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-2.5 rounded-[11px] w-[51%]">
                    <div className="bg-green-800 flex flex-col items-center justify-end p-1.5 rounded-[11px] w-full">
                     
                      <a
                        href="javascript:"
                        className="mt-0.5 text-sm text-white-A700 tracking-[-0.98px]"
                      ></a>
                         <button onClick={()=>navigate('/loginsignup')} style={{ color: 'white' }}>
                          <Text size="txtInterSemiBold14WhiteA700">Sign Up</Text>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[2%] px-[18px] top-[0] w-[17%]">
              <Img
                className="h-[118px] md:h-auto object-cover w-[88%]"
                src="images/img_farookflowsquare.png"
                alt="farookflowsquar"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[90px] md:pl-10 sm:pl-5 pl-[165px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start md:mt-0 mt-[90px]">
                <div className="flex flex-col gap-3.5 items-start justify-start py-[3px] w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01"
                    size="txtStapelBold36"
                  >
                    Join the Event Community
                  </Text>
                  <Text
                    className="leading-[26.00px] mb-[58px] text-base text-indigo-300 w-full"
                    size="txtRobotoRegular16"
                  >
                    Connect with fellow event enthusiasts and stay in the loop
                    on the latest happenings at farookflow. Engage, share, and
                    elevate your event experience with our dynamic community.
                    Join now!
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  {/* <div className="flex sm:flex-1 flex-col items-start justify-start pb-0.5 w-[48%] sm:w-full">
                    <Img
                      className="h-9"
                      src="images/img_elementcardin.svg"
                      alt="elementcardin"
                    /> */}
                    {/* <Text
                      className="mt-4 text-base text-gray-900"
                      size="txtRobotoMedium16Gray900"
                    >
                      Title Goes Here
                    </Text>
                    <Text
                      className="leading-[18.00px] mt-2.5 text-blue_gray-600 text-xs w-full"
                      size="txtRobotoRegular12"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </Text> */}
                  {/* </div> */}
                  {/* <div className="flex sm:flex-1 flex-col items-start justify-start pb-0.5 w-[48%] sm:w-full">
                    <Img
                      className="h-9"
                      src="images/img_elementcardin.svg"
                      alt="elementcardin_One"
                    />
                    <Text
                      className="mt-4 text-base text-gray-900"
                      size="txtRobotoMedium16Gray900"
                    >
                      Title Goes Here
                    </Text>
                    <Text
                      className="leading-[18.00px] mt-2.5 text-blue_gray-600 text-xs w-full"
                      size="txtRobotoRegular12"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </Text>
                  </div> */}
                </div>
              </div>
              <Img
                className="h-[672px] md:h-auto object-cover"
                src="images/img_teamspiritcuate.png"
                alt="teamspiritcuate"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-stapel items-center mt-[106px] w-full">
          <div className="bg-green-100 flex flex-col items-center justify-start p-[166px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1065px] mx-auto w-full">
              <Text
                className="md:text-5xl text-[70px] text-blue_gray-900_01 text-center"
                size="txtStapelBold70"
              >
                Features!
              </Text>
              <Text
                className="mt-[7px] text-2xl md:text-[22px] text-blue_gray-900_01 text-center sm:text-xl"
                size="txtStapelMedium24"
              >
                Discover the power of our event listing website
              </Text>
              <div className="flex flex-col items-center justify-start mt-[86px] w-full">
                <List
                  className="flex flex-col gap-[89px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[17px] shadow-bs w-[42%] md:w-full">
                      <div className="flex flex-row gap-[9px] items-start justify-start my-1.5 w-[99%] md:w-full">
                        <Img
                          className="h-[34px] md:h-auto object-cover w-[34px]"
                          src="images/img_user1.png"
                          alt="userOne"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-800 text-xl"
                            size="txtStapelBold20"
                          >
                            User Login
                          </Text>
                          <Text
                            className="mt-[3px] text-[15px] text-gray-800 w-full"
                            size="txtStapelRegular15"
                          >
                            Users can create an account and login to the website
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[17px] shadow-bs w-[42%] md:w-full">
                      <div className="flex flex-col justify-start mb-6 w-full">
                        <div className="flex flex-row gap-[11px] items-start justify-start w-[62%] md:w-full">
                          <Img
                            className="h-9 md:h-auto object-cover w-9"
                            src="images/img_event1.png"
                            alt="eventOne"
                          />
                          <Text
                            className="mt-1 text-blue_gray-900_02 text-xl"
                            size="txtStapelBold20Bluegray90002"
                          >
                            Event Submission
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[47px] text-[15px] text-blue_gray-900_02 w-[87%] sm:w-full"
                          size="txtStapelRegular15Bluegray90002"
                        >
                          Registered users can submit upcoming events to be
                          listed on the website
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[17px] shadow-bs w-[42%] md:w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-start my-[5px] w-[97%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="images/img_filterfilledtoolsymbol.png"
                          alt="filterfilledtoo"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-800 text-xl"
                            size="txtStapelBold20"
                          >
                            Event Filtering
                          </Text>
                          <Text
                            className="mt-[3px] text-[15px] text-gray-800 w-full"
                            size="txtStapelRegular15"
                          >
                            Users can filter events based on categories, dates,
                            locations, etc.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[39px] sm:px-5 rounded-[17px] shadow-bs w-[42%] md:w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start my-[7px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_file1.png"
                          alt="fileOne"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start">
                          <Text
                            className="text-blue_gray-900_02 text-xl"
                            size="txtStapelBold20Bluegray90002"
                          >
                            Event Details
                          </Text>
                          <Text
                            className="text-[15px] text-blue_gray-900_02 w-full"
                            size="txtStapelRegular15Bluegray90002"
                          >
                            Each event listing provides detailed information
                            such as date, time, location, description, and
                            organizer details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-stapel items-end mt-[100px] md:pl-10 sm:pl-5 pl-[86px] w-full">
          <div className="sm:h-[1006px] h-[1228px] md:h-[879px] relative w-full">
            <Img
              className="absolute h-[658px] object-cover right-[0] top-[0] w-[31%]"
              src="images/img_questionscuate.png"
              alt="questionscuate"
            />
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[95px] justify-start left-[0] w-[94%]">
              <div className="flex flex-col items-center justify-start w-[70%] md:w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="md:text-5xl text-[70px] text-gray-900_02 tracking-[-3.50px]"
                    size="txtStapelBold70Gray90002"
                  >
                    FAQ
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[78px] items-end justify-start w-full">
                    <Text
                      className="leading-[97.40%] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 tracking-[-2.00px]"
                      size="txtStapelRegular40"
                    >
                      <>
                        Common
                        <br />
                        Questions
                      </>
                    </Text>
                    <Text
                      className="sm:mt-0 mt-[45px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 tracking-[-1.25px]"
                      size="txtStapelRegular25"
                    >
                      Here are some of the most common questions that we get.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-11 md:ml-[0] w-[97%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-2.00px]"
                    size="txtStapelMedium40"
                  >
                    How do I submit an upcoming event?
                  </Text>
                  <Text
                    className="leading-[97.40%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                    size="txtStapelRegular25Black900"
                  >
                    <>
                      To submit an upcoming event, simply login to your account
                      and navigate to the &#39;Submit Event&#39; page. Fill out
                      the required information and click &#39;Submit&#39;.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[67px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-2.00px]"
                    size="txtStapelMedium40"
                  >
                    Can I edit or delete an event after it has been submitted?
                  </Text>
                  <Text
                    className="leading-[97.40%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                    size="txtStapelRegular25Black900"
                  >
                    <>
                      Yes, you can edit or delete an event after it has been
                      submitted. Simply login to your account, go to the &#39;My
                      Events&#39; page, find the event you want to edit or
                      delete, and click on the respective option.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[67px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-2.00px]"
                    size="txtStapelMedium40"
                  >
                    Is there a limit on the number of events I can submit?
                  </Text>
                  <Text
                    className="leading-[97.40%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                    size="txtStapelRegular25Black900"
                  >
                    No, there is no limit on the number of events you can
                    submit. Feel free to submit as many upcoming events as you
                    want.
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start mt-[70px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-2.00px]"
                    size="txtStapelMedium40"
                  >
                    How long does it take for my submitted event to appear on
                    the website?
                  </Text>
                  <Text
                    className="leading-[97.40%] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                    size="txtStapelRegular25Black900"
                  >
                    Once you submit an event, it will go through a review
                    process to ensure it meets our guidelines. This usually
                    takes 1-2 business days. After approval, your event will be
                    visible on the website.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto items-center mt-[85px] w-full">
          <div className="bg-blue-50 flex flex-col items-center justify-end p-[35px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1110px] mt-[25px] mx-auto md:px-5 w-full">
              <div className="flex flex-row items-end justify-between w-full">
                <Text
                  className="my-2.5 text-blue_gray-300 text-sm"
                  size="txtRobotoMedium14"
                >
                  ©2023 TinkerhubFC
                </Text>
                <div className="flex flex-col items-center justify-end">
                  <Text
                    className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-green-800"
                    size="txtRobotoBlack26"
                    
                  >
                    farookflow
                  </Text>
                </div>
                <div className="flex flex-col items-center ">
                <Text
                    className="mt-[3px] md:text-2xl sm:text-[22px] text-[10px] text-black-200"
                    size="txtRobotoBlack10"
                    
                  >
                    This website farookflow is a project done by Amna Riyas, Nasha, Irfan Abdul Hameed for the event Stackup held by TInkerhubFC
                  </Text>
                    
                </div>
                <Button className="cursor-pointer font-medium min-w-[109px] my-1.5 text-center text-xs bg-green-800 rounded-[16px]">
                  Submit An Event
                </Button>
              </div>
              <Line className="bg-blue_gray-100 h-px mt-10 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[23px] w-full">
                <div className="flex md:flex-1 flex-row items-center justify-between w-[23%] md:w-full">
                  <Text
                    className="text-indigo-200 text-sm"
                    size="txtRobotoRegular14Indigo200"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-indigo-200 text-sm"
                    size="txtRobotoRegular14Indigo200"
                  >
                    About
                  </Text>
                  <Text
                    className="text-indigo-200 text-sm"
                    size="txtRobotoRegular14Indigo200"
                  >
                    Contact
                  </Text>
                </div>
                <Img
                  className="h-4 md:ml-[0] ml-[665px] w-4"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-4 md:ml-[0] ml-[30px] w-4"
                  src="images/img_link.svg"
                  alt="link"
                />
                <Img
                  className="h-4 md:ml-[0] ml-[30px] w-4"
                  src="images/img_trash.svg"
                  alt="trash"
                />
                <Img
                  className="h-4 md:ml-[0] ml-[30px] w-4"
                  src="images/img_iconsocialinstagram.svg"
                  alt="iconsocialinsta"
                />
                <Img
                  className="h-4 md:ml-[0] ml-[30px] w-4"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageTwoPage;
