import { useState } from "react";
import { router, useForm } from "@inertiajs/react";

export default function Form() {
    
    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password:"",
        phone: "",

    });
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setData(key,value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data)
        // router.post("/form", values);
    }

    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <div>
                    <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">
                        Student{" "}
                        <span className="text-sm text-purple-700">Registation</span>
                    </h1>
                    <div className="grid max-w-3xl gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400">
                        <div className="grid">
                            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="First name"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="first_name"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    First name
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="Last name"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="last_name"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    Last name
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="Phone number"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="phone"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    Phone number
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="E-mail"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="email"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    E-mail
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="password"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="password"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    Passowrd
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input
                                    type="text"
                                    name="re_password"
                                    id="re_password"
                                    className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0"
                                    placeholder="Re-password"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="re_password"
                                    className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0"
                                >
                                    Re-password
                                </label>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                        required=""
                                        
                                    ></input>
                                </div>
                                <div className="text-sm ml-3">
                                    <label
                                        htmlFor="remember"
                                        className="font-medium text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* <!-- component --> */}
                        <button className="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
                            <span>Theam</span>
                            <svg
                                className="rotate-90 group-focus:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                                />
                            </svg>
                            <div className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
                                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5m4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12q0-.425.288-.712T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13zm-8 10q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16m0-4"
                                        />
                                    </svg>
                                    <p>Light</p>
                                </span>
                                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
                                        />
                                    </svg>
                                    <p>Dark</p>
                                </span>
                                <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 48 48"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 32h10v9H19z"
                                            />
                                            <rect
                                                width="38"
                                                height="24"
                                                x="5"
                                                y="8"
                                                rx="2"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M22 27h4M14 41h20"
                                            />
                                        </g>
                                    </svg>
                                    <p>System</p>
                                </span>
                            </div>
                        </button>

                        <div>
                            <div className="grid">
                                <div className="main flex border rounded-full overflow-hidden m-4 select-none">
                                    <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">
                                        Gender
                                    </div>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input
                                            className="my-auto transform scale-100"
                                            type="radio"
                                            name="sfg"
                                        />
                                        <div className="title px-0">M</div>
                                    </label>

                                    <label className="flex radio p-2 cursor-pointer">
                                        <input
                                            className="my-auto transform scale-100"
                                            type="radio"
                                            name="sfg"
                                        />
                                        <div className="title px-0">F</div>
                                    </label>

                                    <label className="flex radio p-2 cursor-pointer">
                                        <input
                                            className="my-auto transform scale-100"
                                            type="radio"
                                            name="sfg"
                                        />
                                        <div className="title px-0">Other</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit" onClick={handleSubmit}
                            className="mt-4 bg-purple-500 text-white py-1 px-6 rounded-md hover:bg-purple-600 "
                        >
                            Login
                        </button>
                    </div>
                </div>

                {/* <!-- component --> */}
            </div>

            {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-16 py-3">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img
                                    src="https://flowbite.com/docs/images/products/apple-watch.png"
                                    class="w-16 md:w-32 max-w-full max-h-full"
                                    alt="Apple Watch"
                                ></img>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                        class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <div>
                                        <input
                                            type="number"
                                            id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1"
                                            required
                                        />
                                    </div>
                                    <button
                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img
                                    src="https://flowbite.com/docs/images/products/imac.png"
                                    class="w-16 md:w-32 max-w-full max-h-full"
                                    alt="Apple iMac"
                                ></img>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                iMac 27"
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                        class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <div class="ms-3">
                                        <input
                                            type="number"
                                            id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1"
                                            required
                                        />
                                    </div>
                                    <button
                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $2499
                            </td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img
                                    src="https://flowbite.com/docs/images/products/iphone-12.png"
                                    class="w-16 md:w-32 max-w-full max-h-full"
                                    alt="iPhone 12"
                                ></img>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                IPhone 12
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <button
                                        class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <div class="ms-3">
                                        <input
                                            type="number"
                                            id="first_product"
                                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1"
                                            required
                                        />
                                    </div>
                                    <button
                                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span class="sr-only">
                                            Quantity button
                                        </span>
                                        <svg
                                            class="w-3 h-3"
                                            ariaHidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $999
                            </td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}
