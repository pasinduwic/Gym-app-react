import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions
} from "../../utils/fetchData";
import Detail from "../Dtali";
import ExercisesVideos from "../exercisesVideos";
import SimillerExercises from "../simillerExercises";

const ExerciseDetail = () => {
  const [exercisesDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      // const exerciseDeatilData = await fetchData(
      //   `${exerciseDbUrl}/exercises/exercise/${id}`,
      //   exerciseOptions
      // );
      const exerciseDeatilData = {
        bodyPart: "chest",
        equipment: "leverage machine",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
        id: "0009",
        name: "assisted chest dip (kneeling)",
        target: "pectorals"
      };

      // const exerciseVideosData = await fetchData(
      //   `${youtubeSearchUrl}/search?queryy=${exerciseDeatilData.name}`,
      //   youtubeOptions
      // );
      const exerciseVideosData = {
        contents: [
          {
            video: {
              channelId: "UCMla9EyQDlPXUBsWOwmMqZg",
              channelName: "MD Anderson Cancer Center",
              description: "Cardio",
              lengthText: "1:06",
              publishedTimeText: "2 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/YvrKIQ_Tbsk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCjVDMg6rLT_uyj0IX0DoSIB4zxiw",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/YvrKIQ_Tbsk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDem7J9Tfd5AkQaXUE91OPQ8PuTnQ",
                  width: 720
                }
              ],
              title: "Cardio vs. strength training: What you need to know",
              videoId: "YvrKIQ_Tbsk",
              viewCountText: "2,286,202 views"
            }
          },
          {
            video: {
              channelId: "UCBINFWq52ShSgUFEoynfSwg",
              channelName: "POPSUGAR Fitness",
              description:
                "Get your heart rate up without taking it to the mat with this standing ",
              lengthText: "34:45",
              publishedTimeText: "2 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/-YJXpabrX4k/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDUDLOBgw_15zggw-CRTYJD2CHXeg",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/-YJXpabrX4k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDLeIWdtGKOnCClS77gkMtXKwCs4w",
                  width: 720
                }
              ],
              title: "30-Minute Standing Cardio Workout",
              videoId: "-YJXpabrX4k",
              viewCountText: "6,405,839 views"
            }
          },
          {
            video: {
              channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
              channelName: "MadFit",
              description: "Do this 15 minute beginner, full body, ",
              lengthText: "17:39",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/VWj8ZxCxrYk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC28a6WUg337QiGPnmj6u3vXranYQ",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/VWj8ZxCxrYk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6bBiSHIRM4x3ivnFOFYu1_ppJTA",
                  width: 720
                }
              ],
              title: "15 MIN BEGINNER CARDIO Workout (At Home No Equipment)",
              videoId: "VWj8ZxCxrYk",
              viewCountText: "5,575,391 views"
            }
          },
          {
            video: {
              channelId: "UCFjc9H89-RpWuIStDqhO7AQ",
              channelName: "Body Project",
              description:
                "For more workouts just like this one, come and join the team.",
              lengthText: "29:26",
              publishedTimeText: "2 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/8oQ-WNJoYtM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0e2h-k0UsbbefZ4Eg47JSJFA7_w",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/8oQ-WNJoYtM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAhgGNvU3zPfpfhemnLey8T7WFBqQ",
                  width: 720
                }
              ],
              title:
                "Fat burning, high intensity, low impact home cardio workout",
              videoId: "8oQ-WNJoYtM",
              viewCountText: "8,723,559 views"
            }
          },
          {
            video: {
              channelId: "UCFjc9H89-RpWuIStDqhO7AQ",
              channelName: "Body Project",
              description:
                "Transform your body in just 10 weeks and take part in the entire Body Project system. Start your Body Project TODAY! Or simply ...",
              lengthText: "35:48",
              publishedTimeText: "8 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/50kH47ZztHs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC2bVstwmrVQ3MmqSUV2hv1Nk19qw",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/50kH47ZztHs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGWc9GQPtwHrWD24D6DcuZjicLtQ",
                  width: 720
                }
              ],
              title:
                "Low Impact 30 minute cardio workout- Beginner/intermediate",
              videoId: "50kH47ZztHs",
              viewCountText: "21,815,802 views"
            }
          },
          {
            video: {
              channelId: "UCL0-zfZcvpeagrmUcvt3F3A",
              channelName: "Rachel Gulotta Fitness",
              description:
                "The amount of calories you'll burn from this 30-minute workout will vary from person to person, but I slapped a heartrate monitor ...",
              lengthText: "30:35",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/LueYlLt1l9M/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD5TBeFWK15bdlquz6GS0-0Z8wNaA",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/LueYlLt1l9M/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCZiEQUQcdJtqcUBQAvJJhFlP_dNg",
                  width: 720
                }
              ],
              title: "BURN 500 CALORIES with this 30-Minute Cardio Workout!",
              videoId: "LueYlLt1l9M",
              viewCountText: "4,850,190 views"
            }
          },
          {
            video: {
              channelId: "UCiP6wD_tYlYLYh3agzbByWQ",
              channelName: "FitnessBlender",
              description:
                "Fitness Blender's Workout Programs and subscription platform, FB Plus, make it possible to keep our individual workout videos ...",
              lengthText: "37:10",
              publishedTimeText: "9 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/fcN37TxBE_s/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD3SkxEl7-WIMdDuloxtJw_anevGw",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/fcN37TxBE_s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBh1OMIbgvQ9kaBxRZAVGoz1q4i3w",
                  width: 720
                }
              ],
              title:
                "Fat Burning Cardio Workout - 37 Minute Fitness Blender Cardio Workout at Home",
              videoId: "fcN37TxBE_s",
              viewCountText: "71,864,164 views"
            }
          },
          {
            video: {
              channelId: "UCBINFWq52ShSgUFEoynfSwg",
              channelName: "POPSUGAR Fitness",
              description:
                "Find more from Massy Arias on: http://bit.ly/MassyAriasOnGlow Get ready to tone your core with this no-equipment workout from ...",
              lengthText: "30:04",
              publishedTimeText: "3 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/05fCNM9f0ic/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB4ZRgXEOx3YmiDbl1lurSgYx6z9g",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/05fCNM9f0ic/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuPwmL8p9dGXHtrInUSjRSdLAGOA",
                  width: 720
                }
              ],
              title:
                "30-Minute No-Equipment Cardio and Core Workout With Massy Arias",
              videoId: "05fCNM9f0ic",
              viewCountText: "3,473,874 views"
            }
          },
          {
            video: {
              channelId: "UCX9O7iJumYyptL89Vx8LR-w",
              channelName: "AllHealthGo",
              description:
                "\"The important thing when it comes to exercising is you need to take time and gradually build your base, you don't want to go out ...",
              lengthText: "1:56",
              publishedTimeText: "3 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/aX6um4KoCUE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBN66hjpugWkxMMwgWFPqNxVFs76w",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/aX6um4KoCUE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFAo9n4PiYhaPvsXvSNUSI7Wn4NA",
                  width: 720
                }
              ],
              title: "The Dangers of Too Much Cardio",
              videoId: "aX6um4KoCUE",
              viewCountText: "8,769 views"
            }
          },
          {
            video: {
              channelId: "UChVRfsT_ASBZk10o0An7Ucg",
              channelName: "Pamela Reif",
              description:
                "Celebrating our community of insane 7 MILLION!!! Put on a smile & join me for a fun ",
              lengthText: "12:24",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/HE0WhQlkuN0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCr3MGuT4YA5NnsX1bbZgH5djPTsg",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/HE0WhQlkuN0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD7QdLevE47pR7Njdel0RfINv6ihw",
                  width: 720
                }
              ],
              title:
                "12 MIN ENJOY CARDIO - a good mood cardio session, LET'S HAVE FUN! / Pamela Reif",
              videoId: "HE0WhQlkuN0",
              viewCountText: "5,511,374 views"
            }
          },
          {
            video: {
              channelId: "UCwrXi5ZknKThspJc-Gai04g",
              channelName: "Juice & Toya",
              description: "Tap in with us for a fun 20 Minute high intensity ",
              lengthText: "29:03",
              publishedTimeText: "9 months ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/M0uO8X3_tEA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAu7W8A0q-zah7Z4lpgjJmCVHUJfw",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/M0uO8X3_tEA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBy05LPtgJ0O-aAv7ATfD-qKZN7aQ",
                  width: 720
                }
              ],
              title: "20 Minute Full Body Cardio HIIT Workout [NO REPEAT]",
              videoId: "M0uO8X3_tEA",
              viewCountText: "9,240,880 views"
            }
          },
          {
            video: {
              channelId: "UC68TLK0mAEzUyHx5x5k-S1Q",
              channelName: "Jeff Nippard",
              description:
                "------------------------------- Help SUPPORT the channel by: 1. Trying one of my training programs: ...",
              lengthText: "13:27",
              publishedTimeText: "10 months ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/crPb62o-z_E/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA7QyxR6lPvOPQeVxK8xpIq7DNNXQ",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/crPb62o-z_E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDcfEC8ySSMGf__PoNDSRAVrbjhJg",
                  width: 720
                }
              ],
              title:
                "The Worst Cardio Mistakes Everyone Makes For Fat Loss (Avoid These)",
              videoId: "crPb62o-z_E",
              viewCountText: "2,722,482 views"
            }
          },
          {
            video: {
              channelId: "UCsLF0qPTpkYKq81HsjgzhwQ",
              channelName: "growingannanas",
              description:
                "Here's a killer post-Christmas Cookie Burner workout for you all! Time to get the heart pumping, burn some calories and sweat it ...",
              lengthText: "35:52",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/jpizoUy4K9s/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCexVWomw-wxM_K3OkmFOJX80Q0VQ",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/jpizoUy4K9s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmdxso4iQC5eU_er7AzvhoWC_Esg",
                  width: 720
                }
              ],
              title:
                "30 MIN CALORIE KILLER HIIT Workout - Full body Cardio, No Equipment, No Repeat",
              videoId: "jpizoUy4K9s",
              viewCountText: "7,875,981 views"
            }
          },
          {
            video: {
              channelId: "UCGiSCVGNukLqv8hwpKCsQKQ",
              channelName: "SELF",
              description: "A 30 minute HIIT ",
              lengthText: "32:42",
              publishedTimeText: "4 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/bdCX8Nb_2Mg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDcD-GMqZP-gTU9Ytw5J_2vUGlw_Q",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/bdCX8Nb_2Mg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA0puZna7dBowAY1xualKiPU67KGA",
                  width: 720
                }
              ],
              title:
                "30 Minute HIIT Cardio Workout + Abs At Home - With Warmup | SELF",
              videoId: "bdCX8Nb_2Mg",
              viewCountText: "10,346,059 views"
            }
          },
          {
            video: {
              channelId: "UCFjc9H89-RpWuIStDqhO7AQ",
              channelName: "Body Project",
              description:
                "If you'd like to take part in more workouts just like this with Daniel and the team, come and join the Team Body Project site, where ...",
              lengthText: "29:34",
              publishedTimeText: "2 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/PvEnWsPrL4w/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBypZKPLaqNPhyPn6hyR_Z-pMmC8g",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/PvEnWsPrL4w/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAdgUa3WrokjNuIy4BEbMWvIVmosw",
                  width: 720
                }
              ],
              title:
                "Low impact, beginner, fat burning, home cardio workout. ALL standing!",
              videoId: "PvEnWsPrL4w",
              viewCountText: "9,648,615 views"
            }
          },
          {
            video: {
              channelId: "UCGiSCVGNukLqv8hwpKCsQKQ",
              channelName: "SELF",
              description: "In this high intensity ",
              lengthText: "28:51",
              publishedTimeText: "4 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/ml6cT4AZdqI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC6lnb5dHST7GyXYiuWjHxGI11IIA",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/ml6cT4AZdqI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPVi05j1kKJbBKltP73uG2SQhXYg",
                  width: 720
                }
              ],
              title:
                "30-Minute HIIT Cardio Workout with Warm Up - No Equipment at Home | SELF",
              videoId: "ml6cT4AZdqI",
              viewCountText: "45,043,165 views"
            }
          },
          {
            video: {
              channelId: "UCDoVqEfsRy76Rs59oa1zltw",
              channelName: "Sientete Joven",
              description:
                "Cardio Full Body Routine 30 minutes Fat Burning Cardio Full Body for beginners\n\nHi, beautiful! How are you?\n\nWelcome to a new ...",
              lengthText: "30:28",
              publishedTimeText: "3 years ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/VKOYzh10ipE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAjgSoSrK4CIceJqhchTngql5t3jQ",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/VKOYzh10ipE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPEhAFxNOkgyArAJkKiNSPo0c9mw",
                  width: 720
                }
              ],
              title:
                "Cardio Full Body Routine 30 minutes Fat Burning Cardio Full Body for beginners",
              videoId: "VKOYzh10ipE",
              viewCountText: "11,391,599 views"
            }
          },
          {
            video: {
              channelId: "UCwrXi5ZknKThspJc-Gai04g",
              channelName: "Juice & Toya",
              description: "Follow along with us for a 15 minute full body ",
              lengthText: "17:59",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/IvmaekQfKiw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBX61JhUwg2q3QQuxrqOeXkSDim4A",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/IvmaekQfKiw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAgXSe6_76AS_dqCgamq42MSdiIA",
                  width: 720
                }
              ],
              title: "15 Minute Full Body Cardio Workout (No Equipment)",
              videoId: "IvmaekQfKiw",
              viewCountText: "1,850,591 views"
            }
          },
          {
            video: {
              channelId: "UChVRfsT_ASBZk10o0An7Ucg",
              channelName: "Pamela Reif",
              description:
                "a fun calorie killer! ♥︎ feeling unmotivated? feeling a bit sad? or just want to do a fun way of INTENSE ",
              lengthText: "12:01",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/QPKXw8XEQiA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAlZK93Bxjr6VV8a850XB2mq-m8KA",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/QPKXw8XEQiA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD16paL3I-lDiAMPc5hJkLQRUCBNg",
                  width: 720
                }
              ],
              title:
                "12 MIN HAPPY CARDIO - a good mood High Intensity Choreo / No Equipment I Pamela Reif",
              videoId: "QPKXw8XEQiA",
              viewCountText: "21,366,109 views"
            }
          },
          {
            video: {
              channelId: "UCFjc9H89-RpWuIStDqhO7AQ",
              channelName: "Body Project",
              description:
                "Join the team and get RESULTS! Take part in over 500 workouts, countless workout plans, and lots of support from everybody at ...",
              lengthText: "33:41",
              publishedTimeText: "1 year ago",
              thumbnails: [
                {
                  height: 202,
                  url:
                    "https://i.ytimg.com/vi/qfe4vzupWjI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDi1cDDzJnlN8McRVshwCpAApZ4jw",
                  width: 360
                },
                {
                  height: 404,
                  url:
                    "https://i.ytimg.com/vi/qfe4vzupWjI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD5GdmXBUyBhXMtXZpwqYRuRp0jdg",
                  width: 720
                }
              ],
              title:
                "LOW IMPACT home cardio workout - fat burner - NO EQUIPMENT!",
              videoId: "qfe4vzupWjI",
              viewCountText: "5,520,010 views"
            }
          }
        ],
        estimatedResults: "18584701",
        next:
          "Eo8DEgZjYXJkaW8ahANTQlNDQVF0WmRuSkxTVkZmVkdKemE0SUJDeTFaU2xod1lXSnlXRFJyZ2dFTFZsZHFPRnA0UTNoeVdXdUNBUXM0YjFFdFYwNUtiMWwwVFlJQkN6VXdhMGcwTjFwNmRFaHpnZ0VMVEhWbFdXeE1kREZzT1UyQ0FRdG1ZMDR6TjFSNFFrVmZjNElCQ3pBMVprTk9UVGxtTUdsamdnRUxZVmcyZFcwMFMyOURWVVdDQVF0SVJUQlhhRkZzYTNWT01JSUJDMDB3ZFU4NFdETmZkRVZCZ2dFTFkzSlFZall5YnkxNlgwV0NBUXRxY0dsNmIxVjVORXM1YzRJQkMySmtRMWc0VG1KZk1rMW5nZ0VMVUhaRmJsZHpVSEpNTkhlQ0FRdHRiRFpqVkRSQldtUnhTWUlCQzFaTFQxbDZhREV3YVhCRmdnRUxTWFp0WVdWclVXWkxhWGVDQVF0UlVFdFlkemhZUlZGcFFZSUJDM0ZtWlRSMmVuVndWMnBKc2dFR0NnUUlGQkFDGIHg6BgiC3NlYXJjaC1mZWVk"
      };

      // const targetMuscleExercisesData = await fetchData(
      //   `${exerciseDbUrl}/exercises/targettt/${exerciseDeatilData.target}`,exerciseOptions
      // );
      const targetMuscleExercisesData = [
        {
          bodyPart: "chest",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
          id: "3294",
          name: "archer push up",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
          id: "0009",
          name: "assisted chest dip (kneeling)",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "assisted",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1716.gif",
          id: "1716",
          name: "assisted seated pectoralis major stretch with stability ball",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2364.gif",
          id: "2364",
          name: "assisted wide-grip chest dip (kneeling)",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1254.gif",
          id: "1254",
          name: "band bench press",
          target: "pectorals"
        },
        {
          bodyPart: "chest",
          equipment: "band",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0989.gif",
          id: "0989",
          name: "band one arm twisting chest press",
          target: "pectorals"
        }
      ];

      // const equipmentExercisesData = await fetchData(
      //   `${exerciseDbUrl}/exercises/equipmentttt/${exerciseDeatilData.equipment}`,exerciseOptions
      // );
      const equipmentExercisesData = [
        {
          bodyPart: "chest",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
          id: "0009",
          name: "assisted chest dip (kneeling)",
          target: "pectorals"
        },
        {
          bodyPart: "back",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
          id: "0015",
          name: "assisted parallel close grip pull-up",
          target: "lats"
        },
        {
          bodyPart: "back",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
          id: "0017",
          name: "assisted pull-up",
          target: "lats"
        },
        {
          bodyPart: "back",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1431.gif",
          id: "1431",
          name: "assisted standing chin-up",
          target: "lats"
        },
        {
          bodyPart: "back",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1431.gif",
          id: "1431",
          name: "assisted standing chin-up",
          target: "lats"
        },
        {
          bodyPart: "back",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1432.gif",
          id: "1432",
          name: "assisted standing pull-up",
          target: "lats"
        },
        {
          bodyPart: "upper arms",
          equipment: "leverage machine",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0019.gif",
          id: "0019",
          name: "assisted triceps dip (kneeling)",
          target: "triceps"
        }
      ];

      setExerciseDetail(exerciseDeatilData);
      setExerciseVideos(exerciseVideosData);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equipmentExercisesData);

      // console.log(equipmentExercisesData);
    };

    // console.log(exercisesDetail);
    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exercisesDetail={exercisesDetail} />
      <ExercisesVideos
        exercisesVideos={exercisesVideos}
        name={exercisesDetail.name}
      />
      <SimillerExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
