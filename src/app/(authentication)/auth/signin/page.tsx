
export default function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-center">
      <p className="text-red-950">Welcome back, <br /> please login to your account</p>
      <div className="w-[300px] h-96 rounded-xl flex flex-col justify-start items-center gap-4 pt-10">
        <input type="text" name="email" id="email" placeholder="Your email" className="w-4/5  h-14 rounded-lg pl-3 border-2 border-red-900"/>
        <input type="password" name="password" id="password" placeholder="your password" className="w-4/5  h-14 rounded-lg pl-3 border-2 border-red-900"/>
        <button type="submit" className="w-40 h-14 bg-red-900 rounded-md text-white">Login</button>
      </div>
    </div>
  )
}
