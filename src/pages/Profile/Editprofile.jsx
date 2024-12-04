import React, { useState } from 'react';
import "@/components/Profile.css";
import profilepic from '../../../public/images/users/male_01.jpg';
import { DatePicker } from "@nextui-org/react";
import { FaEnvelope, FaMapMarkerAlt, FaLink, FaTwitter, FaFacebook, FaPen } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { LuPaperclip } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const [gender, setGender] = useState('');
  const [hideGender, setHideGender] = useState(false);
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [biography, setBiography] = useState('');

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleHideGenderChange = (event) => {
    setHideGender(event.target.checked);
  };

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit/username');
  };

  return (
    <div>
      <div className="details bg-background text-foreground">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-8 m-2 rounded-xl relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaEnvelope size={50} className="text-white justify-middle" />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Personal Information
              </h1>
              <h1 className='text-base text-left'>Manage Your Account</h1>
            </span>
          </div>
        </div>

        <div className='p-2 mx-10 h-auto border-1 border-t-white border-x-white flex items-center'>
          <div className='w-1/3'>Avatar</div>
          <div className='w-2/3'>
            <img className="picture ml-2" src={profilepic} alt="profile-pic" />
            <Button className='bg-primary ml-5 text-white'>
              Change Avatar
            </Button>
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Username</div>
          <div className='w-2/3'>
            <label className='ml-2 flex items-center'>
              <div className='w-full align-middle p-2 bg-input border-2 rounded-l-xl'>
                Ravindu Ashen
              </div>
              {/* <button className='bg-primary h-10 py-3 rounded-r-xl'>
      <Link to="./Editusername" className="flex items-center">
        <LuPaperclip className='ml-2 mr-3 text-white' />
        Edit Username
      </Link>
    </button> */}
    <button onClick={handleEditClick} className="bg-primary h-10 py-3 rounded-r-xl">
             <LuPaperclip className="ml-2 mr-3 text-white" />
            </button>
            </label>
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Birthday</div>
          <div className='w-2/3'>
            <label className='ml-2'>
              <div className='w-auto align-middle p-2 bg-input'>
                <DatePicker showMonthAndYearPickers class/>
              </div>
            </label>
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Gender</div>
          <div className='w-2/3'>
            <label className='ml-2'>
              <select
                value={gender}
                onChange={(e) => handleInputChange(e, setGender)}
                className='w-auto align-middle p-2 bg-input'
              >
                <option value=''>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </label>
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Hide Gender</div>
          <div className='w-2/3'>
            <label className='ml-2'>
              <input
                type='checkbox'
                checked={hideGender}
                onChange={handleHideGenderChange}
                className='w-auto align-middle'
              />
            </label>
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Location</div>
          <div className='w-2/3 flex items-center'>
            <FaMapMarkerAlt className='mr-2' />
            <input
              type='text'
              placeholder='Your location'
              value={location}
              onChange={(e) => handleInputChange(e, setLocation)}
              className='w-full align-middle p-2 bg-input'
            />
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Website</div>
          <div className='w-2/3 flex items-center'>
            <FaLink className='mr-2' />
            <input
              type='text'
              placeholder='Website'
              value={website}
              onChange={(e) => handleInputChange(e, setWebsite)}
              className='w-full align-middle p-2 bg-input'
            />
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Twitter</div>
          <div className='w-2/3 flex items-center'>
            <FaTwitter className='mr-2' />
            <input
              type='text'
              placeholder='Twitter username'
              value={twitter}
              onChange={(e) => handleInputChange(e, setTwitter)}
              className='w-full align-middle p-2 bg-input'
            />
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Facebook</div>
          <div className='w-2/3 flex items-center'>
            <FaFacebook className='mr-2' />
            <input
              type='text'
              placeholder='Facebook profile URL'
              value={facebook}
              onChange={(e) => handleInputChange(e, setFacebook)}
              className='w-full align-middle p-2 bg-input'
            />
          </div>
        </div>

        <div className='p-3 mx-10 h-auto border-1 border-t-gray-300 border-x-white flex items-center'>
          <div className='w-1/3'>Biography</div>
          <div className='w-2/3 flex items-center'>
            <FaPen className='mr-2' />
            <textarea
              placeholder='Tell us about you'
              value={biography}
              onChange={(e) => handleInputChange(e, setBiography)}
              className='w-full align-middle p-2 bg-input'
            />
          </div>
        </div>
        <div className='p-3 h-auto flex items-center'>
        <div className='w-1/3'></div>
        <div className='p-3 w-2/3 h-auto flex items-center justify-start'>
          <Button color="primary">
            Update Profile
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default EditProfile;
