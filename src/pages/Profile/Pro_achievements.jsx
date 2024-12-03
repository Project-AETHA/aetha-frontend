import "@/components/Profile.css";


function Pro_achievements() {

  const achievements = [
    {
      imgSrc: '../../public/images/badge1.png',
      title: "Bookworm",
      description: "Awarded for reading 10 books on our platform. Your dedication to reading is truly impressive!",
    },
    {
      imgSrc: '../../public/images/badge2.png',
      title: "Prolific Writer",
      description: "Given for publishing 5 books. Your creativity and hard work shine through your published works!",
    },
    {
      imgSrc: '../../public/images/badge3.png',
      title: "Top Reviewer",
      description: "Granted for receiving 50 upvotes on your reviews. Your insights are highly valued by the community!",
    },
    {
      imgSrc: '../../public/images/badge4.png',
      title: "Crowd Pleaser",
      description: "Earned for getting 100 likes on a single book. Readers are enthusiastic about your work!",
    },
    {
      imgSrc: '../../public/images/badge5.png',
      title: "Marathon Reader",
      description: "Earned by reading for 50 hours in total. Your commitment to reading is truly commendable!",
    },
    {
      imgSrc: '../../public/images/badge6.png',
      title: "Master Storyteller",
      description: "Awarded for writing 100,000 words. Your storytelling skills are exceptional and influential!",
    }
  ];

  return (
    <>
      <div className="flex">
        <div className="mx-16 mt-6 w-full bg-white rounded-2xl pt-6">
          <div className="flex-wrap mx-16 justify-items-start text-foreground text-lg">
            <div className="text-xl font-bold">Your Achievements</div>
            {achievements.map((achievement, index) => (
              <div key={index} className='p-1 h-40 border-1 border-t-white border-x-white flex items-center'>
                <div className='w-1/6'>
                  <div className='h-20 w-20 m-4'><img src={achievement.imgSrc} alt={achievement.title} /></div>
                </div>
                <div className='w-4/5'>
                  <label className='ml-2'>
                    <div className="text-lg font-semibold px-2 text-foreground">{achievement.title}</div>
                    <div className='w-auto text-base align-middle p-2'>{achievement.description}</div>
                  </label>
                </div>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </>
  );
}

export default Pro_achievements;
