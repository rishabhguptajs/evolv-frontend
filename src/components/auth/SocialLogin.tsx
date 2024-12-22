'use client';

import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <button
        onClick={handleGoogleLogin}
        className="group relative flex items-center justify-center gap-3 w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-white/90 hover:text-white transition-colors"
      >
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
        <FaGoogle className="text-lg" /> 
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;