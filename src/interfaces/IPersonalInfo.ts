export interface IPersonalInfo {
    first_name: string;
    last_name: string;
    location: string;
    phone_number: string;
    email: string;
    military_obligations_fulfilled: boolean;
    professional_profile: string;
    personal_banner: string; // Assuming the image path is stored as a string
    personal_info_created: string; // Assuming the date-time is stored as a string
    personal_info_updated: string; // Assuming the date-time is stored as a string
}
