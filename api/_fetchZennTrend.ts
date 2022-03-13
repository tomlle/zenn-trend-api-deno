import axiod from "https://deno.land/x/axiod@0.24/mod.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";
const url = "https://zenn.dev/";

/**
 * Zenn公式サイトからTechトレンド情報を取得
 */
export default async function fetchZennTrend() {
  // Zenn公式サイトのTOPページ取得
  const html: string = await axiod
    .get(url, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(({ data }) => {
      return data;
  });
  // スクレイピングライブラリでTOPページ情報読み込み
  const $ = cheerio.load(html);
  // トレンドデータの抽出
  const raw: string = $('script[id=__NEXT_DATA__]').html() ?? '';

  return raw;
}