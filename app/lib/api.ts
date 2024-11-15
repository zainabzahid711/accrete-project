// client sidee

// -------nodeMailer ---------------

// ---------------sync with MICROSOFT TEAMS---------------------

// client side code remains same in both cases
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
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log("Failed to send data", errorResponse);
    }
    return await response.json();
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};
