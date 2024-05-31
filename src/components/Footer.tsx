import React, {useEffect, useState} from 'react'
import {IPersonalInfo} from "../interfaces/IPersonalInfo";
import {fetchPersonalInfo} from "../services/PersonalInfoService";

const Footer = () => {
    const [personalInfo, setPersonalInfo] = useState<IPersonalInfo[] | null>(null);

    useEffect(() => {
        const getPersonalInfo = async () => {
            try {
                const data = await fetchPersonalInfo();
                setPersonalInfo(data);
            } catch (error) {
                console.error("Failed to fetch personal information", error);
            }
        };

        getPersonalInfo();
    }, []);

    if (!personalInfo || personalInfo.length === 0) {
        return <div>No personal information available</div>;
    }

    return (
        <div>
            {personalInfo.map(info => (
                <div key={info.email} className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
                    <span className="primary-color">{info.first_name} {info.last_name}</span>
                    <p className="text-gray-600">{info.email}</p>
                </div>
            ))}
        </div>
    )
}
export default Footer
