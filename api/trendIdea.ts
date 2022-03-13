
import fetchZennTrend from "./_fetchZennTrend.ts";

export default async function handler(_req:Request): Promise<Response> {
  try {
    const response = {
      status: 200,
      data: {},
    };
    // トレンド情報取得
    const raw = await fetchZennTrend();
    if (raw === '')  {
      response.status = 500;
      response.data = {message: 'fetch error from Zenn corporate site'};
    }else{
      response.data = JSON.parse(raw).props.pageProps.dailyIdeaArticles;
    }
    // 返却処理
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: {
        "content-type": "application/json; charset=utf-8",
      }
    });
  } catch (_error) {
    return new Response(JSON.stringify({ message: "System Error" }), {
      status: 500,
      headers: {
        "content-type": "application/json; charset=utf-8",
      }
    });
  }
}