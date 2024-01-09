import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { Link } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const Home1Page = ({ books }) => {
  console.log(books);
  if (!books || !books.length) {
    return null;
  }

  const firstBooks = books[0];
  const secondBooks = books[2];
  const thirdBooks = books[21];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [grouptwentysixvalue, setGrouptwentysixvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-poppins items-center justify-start mx-auto p-8 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1246px] mb-[227px] mx-auto md:px-5 w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-between w-[19%] md:w-full">
              <Button
                className="flex h-[58px] items-center justify-center mt-[13px] w-[58px]"
                shape="round"
                color="deep_purple_A200"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_settings.svg" alt="settings" />
              </Button>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="sm:text-[31px] md:text-[37px] text-[41px] text-gray-900"
                  size="txtPoppinsMedium41"
                >
                  Bookoe
                </Text>
                <Text
                  className="text-gray-900 text-sm"
                  size="txtPoppinsLight14"
                >
                  Rekomendasi Bukumu
                </Text>
              </div>
            </div>
            {/* <ul className="flex md:flex-1 flex-row gap-6 sm:hidden items-start justify-center mb-[9px] md:ml-[0] ml-[200px] md:mt-0 mt-[31px] w-[19%] md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold text-gray-900 text-xl underline"
                >
                  <Text size="txtPoppinsSemiBold20">All</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold text-gray-600 hover:text-gray-900 text-xl hover:underline"
                >
                  <Text size="txtPoppinsRegular20">Latest</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold text-gray-600 hover:text-gray-900 text-xl hover:underline"
                >
                  <Text size="txtPoppinsRegular20">Top Picks</Text>
                </a>
              </li>
            </ul> */}

            <ul className="flex flex-row sm:hidden items-start justify-center mb-2 md:ml-[0] ml-[200px] md:mt-0 mt-[31px] w-[19%] md:w-full common-row-list">
              <li>
                <Link to="/">
                  <Text
                    className="ml-[26px] text-gray-600 text-xl hover:font-semibold"
                    size="txtPoppinsRegular20"
                  >
                    <>All</>
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="latest">
                  <Text
                    className="ml-[26px] text-gray-600 text-xl hover:font-semibold"
                    size="txtPoppinsRegular20"
                  >
                    <>Latest</>
                  </Text>
                </Link>
              </li>
              <li>
                <Link to="search">
                  <Text
                    className="ml-[26px] text-gray-600 text-xl hover:font-semibold"
                    size="txtPoppinsRegular20"
                  >
                    <>Top Picks</>
                  </Text>
                </Link>
              </li>
            </ul>
            <Input
              name="groupTwentySix"
              placeholder="Search by title or authors..."
              value={grouptwentysixvalue}
              onChange={(e) => setGrouptwentysixvalue(e)}
              className="!placeholder:text-gray-500 !text-gray-500 font-light leading-[normal] p-0 text-left text-xl w-full"
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[37px] md:mt-0 mt-[21px] w-[33%] md:w-full"
              prefix={
                <div className="h-5 mt-0.5 mb-1.5 mr-3.5 w-5">
                  <Img
                    className="cursor-pointer h-5 my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              }
              suffix={
                <CloseSVG
                  fillColor="#a3a3a3"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setGrouptwentysixvalue("")}
                  style={{
                    visibility:
                      grouptwentysixvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              color="gray_300"
              variant="outline"
            ></Input>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[135px] ml-4 md:ml-[0] md:mt-0 mt-[21px] rounded-lg text-center text-xl"
              shape="round"
              color="deep_purple_A200"
              size="sm"
              variant="outline"
            >
              Edit List
            </Button>
          </header>
          <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] p-[65px] md:px-10 sm:px-5 rounded-[15px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[5px] w-[48%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-deep_purple-A200 text-xl"
                  size="txtPoppinsSemiBold20DeeppurpleA200"
                >
                  MUST READ
                </Text>
                <Text
                  className="leading-[72.00px] mt-2 md:text-5xl text-[62px] text-gray-900"
                  size="txtPoppinsSemiBold62"
                >
                  <>{firstBooks.title}</>
                </Text>
                <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[3px] mt-3.5 w-[49%] md:w-full">
                  <Text
                    className="mt-0.5 text-base text-black-900"
                    size="txtPoppinsMedium16"
                  >
                    {firstBooks.author.name}
                  </Text>
                  <Img
                    className="h-[25px]"
                    src="images/img_group2903.svg"
                    alt="group2903"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[29px] text-base text-black-900 w-[85%] sm:w-full"
                  size="txtPoppinsRegular16"
                >
                  {firstBooks.synopsis}
                </Text>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between md:ml-[0] ml-[3px] mt-4 w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[193px] rounded-lg"
                    rightIcon={
                      <div className="mt-2 mb-1.5 ml-[13px]">
                        <Img src="images/Vector.png" alt="arrow_left" />
                      </div>
                    }
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-left text-xl">
                      Read Book
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[314px] rounded-lg text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="outline"
                  >
                    See All Recomendations
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[390px] mr-1.5 relative w-[37%] md:w-full">
              <div className="absolute h-[327px] inset-y-[0] my-auto right-[0] w-[70%]">
                <Img
                  className="absolute h-[272px] inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-[70%]"
                  src={firstBooks.image_url}
                  alt="productphoto"
                />
                <Img
                  className="absolute h-[327px] inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-[84%]"
                  src={secondBooks.image_url}
                  alt="productphoto_One"
                />
              </div>
              <Img
                className="absolute h-[390px] inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-[69%]"
                src={thirdBooks.image_url}
                alt="productphoto_Two"
              />
            </div>
          </div>
          <div className="md:gap-5 gap-[114px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[114px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  className="h-[346px] md:h-auto object-cover rounded-lg"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    <>{firstBooks.title}</>
                  </Text>
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtPoppinsRegular20Black900"
                  >
                    by Kevin Anderson
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mt-[13px] w-[65%] md:w-full">
                    <Text
                      className="bg-yellow-800 flex h-[41px] items-center justify-center rounded-[20px] text-base text-center text-white-A700 w-[41px]"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      4.0
                    </Text>
                    <Img
                      className="h-[25px]"
                      src="images/img_group2903.svg"
                      alt="group2915"
                    />
                  </div>
                  <Text
                    className="mt-[27px] text-base text-gray-900 w-full"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[270px] mt-[29px] rounded-lg text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="outline"
                  >
                    Read Book
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  className="h-[346px] md:h-auto object-cover rounded-lg"
                  src="images/img_productphoto_346x277.png"
                  alt="productphoto"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                    size="txtPoppinsSemiBold24"
                  >
                    <>{firstBooks.title}</>
                  </Text>
                  <Text
                    className="mt-1 text-black-900 text-center text-xl"
                    size="txtPoppinsRegular20Black900"
                  >
                    by Kevin Anderson
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mt-[18px] w-[65%] md:w-full">
                    <Text
                      className="bg-yellow-800 flex h-[41px] items-center justify-center rounded-[20px] text-base text-center text-white-A700 w-[41px]"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      4.0
                    </Text>
                    <Img
                      className="h-[25px]"
                      src="images/img_group2903.svg"
                      alt="group2903"
                    />
                  </div>
                  <Text
                    className="mt-[31px] text-base text-gray-900 w-full"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incid...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[270px] mt-[29px] rounded-lg text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="outline"
                  >
                    Read Book
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                <Img
                  className="h-[346px] md:h-auto object-cover rounded-lg"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    <>{firstBooks.title}</>
                  </Text>
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtPoppinsRegular20Black900"
                  >
                    by Cynthia D’Aprix Sweeney
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mt-[15px] w-[65%] md:w-full">
                    <Text
                      className="bg-yellow-800 flex h-[41px] items-center justify-center rounded-[20px] text-base text-center text-white-A700 w-[41px]"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      4.0
                    </Text>
                    <Img
                      className="h-[25px]"
                      src="images/img_group2903.svg"
                      alt="group2907"
                    />
                  </div>
                  <Text
                    className="mt-[38px] text-base text-gray-900 w-full"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[270px] mt-[29px] rounded-lg text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="outline"
                  >
                    Read Book
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <Img
                  className="h-[346px] md:h-auto object-cover rounded-lg"
                  src="images/img_productphoto_1.png"
                  alt="productphoto"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtPoppinsSemiBold24"
                  >
                    <>{firstBooks.title}</>
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900 text-xl"
                    size="txtPoppinsRegular20Black900"
                  >
                    by Nikki Payne
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mt-[17px] w-[65%] md:w-full">
                    <Text
                      className="bg-yellow-800 flex h-[41px] items-center justify-center rounded-[20px] text-base text-center text-white-A700 w-[41px]"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      4.0
                    </Text>
                    <Img
                      className="h-[25px]"
                      src="images/img_group2903.svg"
                      alt="group2909"
                    />
                  </div>
                  <Text
                    className="mt-[23px] text-base text-gray-900 w-full"
                    size="txtPoppinsRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[270px] mt-[29px] rounded-lg text-center text-xl"
                    shape="round"
                    color="deep_purple_A200"
                    size="sm"
                    variant="outline"
                  >
                    Read Book
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[113px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Img
                className="h-[340px] md:h-auto md:ml-[0] ml-[5px] object-cover rounded-lg w-[99%] sm:w-full"
                src="images/img_productphoto_340x260.png"
                alt="productphoto"
              />
              <Text
                className="leading-[32.00px] md:ml-[0] ml-[5px] mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[99%] sm:w-full"
                size="txtPoppinsSemiBold24"
              >
                The Priory of The Orange Tree
              </Text>
              <Text
                className="md:ml-[0] ml-[5px] mt-2 text-black-900 text-xl"
                size="txtPoppinsRegular20Black900"
              >
                by Samanthan Shannon
              </Text>
              <Img
                className="h-[25px] mt-[11px]"
                src="images/img_group2903.svg"
                alt="group2911"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[5px] mt-[11px] rounded-lg text-center text-xl"
                shape="round"
                color="deep_purple_A200"
                size="sm"
                variant="outline"
              >
                Read Book
              </Button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Img
                className="h-[340px] md:h-auto md:ml-[0] ml-[3px] object-cover rounded-lg w-[99%] sm:w-full"
                src="images/img_productphoto_2.png"
                alt="productphoto"
              />
              <Text
                className="md:ml-[0] ml-[3px] mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                The Time Has Come
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[3px] text-black-900 text-xl"
                size="txtPoppinsRegular20Black900"
              >
                by Will Leitch
              </Text>
              <Img
                className="h-[25px] mt-[17px]"
                src="images/img_group2903.svg"
                alt="group2912"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-[42px] rounded-lg text-center text-xl"
                shape="round"
                color="deep_purple_A200"
                size="sm"
                variant="outline"
              >
                Read Book
              </Button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Img
                className="h-[340px] md:h-auto md:ml-[0] ml-[3px] object-cover rounded-lg w-[99%] sm:w-full"
                src="images/img_productphoto_3.png"
                alt="productphoto"
              />
              <Text
                className="md:ml-[0] ml-[3px] mt-1.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                Under The Skin
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[3px] text-black-900 text-xl"
                size="txtPoppinsRegular20Black900"
              >
                by Linda Villarosa
              </Text>
              <Img
                className="h-[25px] mt-[18px]"
                src="images/img_group2903.svg"
                alt="group2913"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-[41px] rounded-lg text-center text-xl"
                shape="round"
                color="deep_purple_A200"
                size="sm"
                variant="outline"
              >
                Read Book
              </Button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Img
                className="h-[340px] md:h-auto md:ml-[0] ml-[3px] object-cover rounded-lg w-[99%] sm:w-full"
                src="images/img_productphoto_4.png"
                alt="productphoto"
              />
              <Text
                className="leading-[32.00px] md:ml-[0] ml-[3px] mt-2.5 text-2xl md:text-[22px] text-black-900 sm:text-xl w-[99%] sm:w-full"
                size="txtPoppinsSemiBold24"
              >
                (Forget a Mentor) Find a Sponsor
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[7px] text-black-900 text-xl"
                size="txtPoppinsRegular20Black900"
              >
                by Sylvia Ann Hewlett
              </Text>
              <Img
                className="h-[25px] mt-[11px]"
                src="images/img_group2903.svg"
                alt="group2914"
              />
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[260px] md:ml-[0] ml-[3px] mt-3 rounded-lg text-center text-xl"
                shape="round"
                color="deep_purple_A200"
                size="sm"
                variant="outline"
              >
                Read Book
              </Button>
            </div>
          </List>
          <div className="bg-deep_purple-A200 flex flex-col gap-[22px] items-center justify-start mt-[107px] p-11 md:px-10 sm:px-5 rounded-[15px] w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-white-A700 w-[69%] sm:w-full"
              size="txtPoppinsSemiBold42"
            >
              Join our newsletter to get our latest recommendation!
            </Text>
            <div className="flex sm:flex-col flex-row gap-2 items-center justify-center mb-[17px] w-2/5 md:w-full">
              <Input
                name="frame39466"
                placeholder="Enter your email"
                className="font-light leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                wrapClassName="flex w-[77%] sm:w-full"
                type="email"
                prefix={
                  <div className="mb-[3px] mr-3 sm:w-full sm:mx-0 w-[7%]">
                    <Img
                      className="my-auto"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                }
                size="sm"
              ></Input>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[99px] rounded-lg text-base text-center"
                shape="round"
                color="gray_100"
                size="md"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
