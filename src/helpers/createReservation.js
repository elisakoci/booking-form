const createReservation = async (data, callBack) => {
  const reservationData = {
    firstName: data[1].firstName,
    lastName: data[1].lastName,
    email: data[1].email,
    phone: data[1].phone,
    eventName: data[2].eventName,
    eventDate: data[2].eventDate,
    startTime: data[2].startTime,
    endTime: data[2].endTime,
    guests: Number(data[2].guests),
    eventType: data[2].eventType,
    roomType: data[2].roomType,
    additionalServices: data[3].additionalServices,
  };

  try {
    const response = await fetch(
      "https://65e3dc5488c4088649f60dd3.mockapi.io/api/v1/reservations",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reservationData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create reservation.");
    }

    const responseData = await response.json();

    callBack(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default createReservation;
