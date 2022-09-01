<template>
  <form
    className="w-1/3 mx-auto h-2/3 mt-20 rounded-md px-3 py-5 shadow-md bg-slate-800"
  >
    <h1 className="text-lg text-white text-center">Login</h1>
    <label className="text-xs text-gray-300">
      Username:
      <input
        type="text"
        value="{username}"
        placeholder="Username"
        className="mt-1 text-gray-300 w-full rounded-lg bg-slate-700 border py-1 px-2 text-xs outline-none placeholder:text-gray-500 border-gray-500"
      />
    </label>
    <label className="text-xs text-gray-300">
      Password:
      <input
        type="password"
        placeholder="Password"
        className="mt-1 text-gray-300 w-full rounded-lg bg-slate-700 border py-1 px-2 text-xs outline-none placeholder:text-gray-500 border-gray-500"
      />
    </label>

    <div className="flex gap-x-5 justify-center mt-4">
      <button
        type="submit"
        className="px-2 py-1 rounded-md text-white text-sm bg-slate-700 hover:bg-slate-800 transition-all"
      >
        Login
      </button>

      <router-link
        to="/login"
        className="px-2 py-1 rounded-md text-white text-base bg-gray-500 hover:bg-slate-800 transition-all"
      >
        Login
      </router-link>
    </div>
  </form>
</template>
