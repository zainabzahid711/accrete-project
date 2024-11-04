interface ContactData {
  jobTitle: string;
  purpose: string;
  state: string;
  practiceName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectedServices: string[];
}
export const sendData = async (data: ContactData) => {
  try {
    const response = await fetch("/api/route", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
    });
    if (!response.ok) {
      console.log("Failed to send data");
    }
    // return await response.json();
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};
