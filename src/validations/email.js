const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const isEmail = (value)=>emailRegexp.test(value)
