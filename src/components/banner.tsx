import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-local"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2022/05/13/16/45/rose-7194127_1280.jpg')`,
        width: '100vw',  
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat',  
        backgroundPosition: 'center', 
    }}
    >
      <div className="flex justify-center text-white max-w-2xl text-center mx-auto py-20 italic leading-8 text-lg			">
        Vestibulum euismod velit at orci rhoncus, sit amet tristique orci
        lacinia. Suspendisse pulvinar ante a lectus ornare, at consectetur enim
        vestibulum. Mauris venenatis dictum mauris, in vulputate sem vulputate
        et. Praesent pharetra purus ut sollicitudin tempor. Morbi elit orci,
        malesuada eu mauris nec, consequat ultricies sem. Nulla eleifend tortor
        dapibus, interdum risus a, ultrices tellus. Nunc eget egestas lacus.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut
        condimentum dapibus turpis non maximus. Phasellus sollicitudin, leo sed
        scelerisque tempor, ante mi ultrices erat, vitae efficitur ante lorem at
        elit.
      </div>
    </div>
  );
};

export default Banner;
