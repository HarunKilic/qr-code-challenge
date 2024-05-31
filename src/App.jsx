function App() {
  return (
    <div className="flex flex-1 bg-[#D5E1EF] h-[100vh] items-center justify-center">
      <div className="max-w-[320px] bg-white p-4 rounded-[20px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.0477)]">
        <div className="rounded-[10px] overflow-hidden">
          <img
            src="image-qr-code.png"
            alt="Frontend Mentor"
          />
        </div>
        <div className="mb-6 mt-7 px-4">
          <p className="text-[#1F314F] font-bold text-center text-[22px]">
            Improve your front-end skills by building projects
          </p>
          <p className="text-[#7D889E] text-center mt-4 text-[15px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
