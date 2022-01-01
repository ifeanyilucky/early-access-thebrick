import axios from "axios";

exports.handler = async (event, context) => {
  const listId = `7cd859ad95`;
  const apiKey = `46b72f347ce859b9db6b0b367b0c66af-us20`;
  const body = JSON.parse(event.body);
  const { email_address } = body;
  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Please provide an email address." }),
    };
  }
  try {
    const payload = {
      email_address,
      status: "subscribed",
    };
    const { data } = await axios.post(
      `https://us20.api.mailchimp.com/3.0/lists/${listId}/members/`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
