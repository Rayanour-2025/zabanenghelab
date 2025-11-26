import axios from "axios";

const TOKEN = "21|J6SjCFCbYMMoFv3ZpVdWZIXuS7yUWYZAMawmInmm029a4509"; // این همون توکن تو هست
const API_URL = "https://ip3.ir/dictionary/api/v1/words";

// داده‌ای که می‌خوای بفرستی
const payload = {
  dictionary_id: 1,
  word: "الله",
};

async function testApi() {
  try {
    console.log("📤 Sending request to:", API_URL);
    const response = await axios.post(API_URL, payload, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });

    console.log("✅ Success!");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error during API request:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

testApi();
