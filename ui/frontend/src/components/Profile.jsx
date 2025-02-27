import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';

function Profile() {
    const [prof, setprof] = useState({});
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user) {
            console.log(user)
            setprof(user);
        }
    }, [user]);

    return (
        <>
            {() => {
                console.log(prof)
            }}

                <div className="flex dark:bg-zinc-850 bg-zinc-200  p-3">
                    <div className="m-3">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-24 w-24">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex flex-col m-4">
                        <p className="font-bold text-4xl dark:text-zinc-200 text-zinc-600">{prof ? prof.name : (<p>Loading...</p>)}</p>
                        <p className=" font-light text-1xl dark:text-zinc-200 text-zinc-600">{prof ? prof.email : (<p>Loading...</p>)}</p>
                        <p className=" font-extralight text-[.80rem] dark:text-zinc-200 text-zinc-600">{prof ? prof.phone : (<p>Loading...</p>)}</p>
                    </div>
                </div>
                <div className="m-3">
                    <p className="font-semibold text-2xl">Question Generated</p>
                </div>
        </>
    );
}

export default Profile;
