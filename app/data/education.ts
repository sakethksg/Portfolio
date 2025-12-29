export interface Education {
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    cgpa?: string;
    grade?: string;
}
  
export const education: Education[] = [
    {
        degree: "B.Tech - Computer Engineering",
        school: "VIT Chennai",
        location: "Chennai, India",
        startDate: "2023",
        endDate: "Present",
    },
    {
        degree: "Intermediate (11th & 12th)",
        school: "Sri Venkateswara Junior College",
        location: "Visakhapatnam",
        startDate: "2021",
        endDate: "2023",
    },
    {
        degree: "High School (1st - 10th)",
        school: "Delhi Public School",
        location: "Visakhapatnam",
        startDate: "2011",
        endDate: "2021",
    },
];