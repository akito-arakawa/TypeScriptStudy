"use strict";
const datas = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
//User型の配列を作成
const users = [];
// datasを改行で分割し、各行を処理
const lines = datas.split("\n");
for (const line of lines) {
    // 空行をスキップ
    if (line === "") {
        continue;
    }
    // 各行をカンマで分割し、User型のオブジェクトを作成
    const [name, ageStr, premiumUserStr] = line.split(",");
    const age = parseInt(ageStr);
    const premiumUser = premiumUserStr === "1";
    // User型のオブジェクトを配列に追加
    users.push({
        name,
        age,
        premiumUser,
    });
}
// ユーザー情報を出力
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    }
    else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
}
