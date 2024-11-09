interface formCardData {
  name: string;
  email: string;
  message: string;
  number: string;
}

export const sendFormCardData = async (Formdata: formCardData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Formdata),
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
