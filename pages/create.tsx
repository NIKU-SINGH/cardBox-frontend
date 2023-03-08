import axios from 'axios';
import React, { useState } from 'react'
import server_url from '../config/config'

// const server_url = 'http://localhost:8000'
const Create = () => {
    const [title, setTitle] = useState<string>();
    const [type, setType] = useState<string>();
    const [link, setLink] = useState<string>();

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${server_url}/cards`, {
                title: title,
                link: link,
                type: type,
            })
        console.log("Posted data is",res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className="bg-gray-100 w-full">
                <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden w-full p-8 sm:max-w-md">
                        <div className="flex items-center justify-center">
                            <a href="#">
                                <div className="flex items-center justify-center h-20 w-20 overflow-hidden rounded-full bg-gray-50 hover:bg-gray-100">
                                    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path> </svg>
                                </div>
                            </a>
                        </div>

                        <form className="mt-4">
                            <input type="hidden" name="_token" value="GhpGn48rFRsMAQKf8HQEOWZsRb9F8VJQwwAQs6Ck" />
                            <div>
                                <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" htmlFor="email"> Name </label>

                                <input className="inline-block w-full py-2 px-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-200 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                                    id="title"
                                    type="text"
                                    name="name"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter your card name" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" htmlFor="password"> Link </label>
                                <input className="inline-block w-full py-2 px-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-200 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                                    id="password"
                                    type="link"
                                    name="link"
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="Enter you link here" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" htmlFor="password"> Type of Card </label>

                                <input
                                    className="inline-block w-full py-2 px-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-200 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                                    id="password"
                                    type="text"
                                    name="type"
                                    onChange={(e) => setType(e.target.value)}
                                    placeholder="Enter your card type" />
                            </div>

                            <div className="mt-4 flex items-center">
                                <button 
                                onClick={handleSubmit}
                                className="inline-flex items-center px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-md mx-2">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create