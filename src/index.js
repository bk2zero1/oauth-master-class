const authorize = ({
  default_avatar_id: defaultAvatarId,
  display_name: displayName,
}) => {
  const avatarHtml = `<div class="avatar" style="background-image:url('https://avatars.mds.yandex.net/get-yapic/${defaultAvatarId}/islands-middle')"></div>`;
  const nameHtml = `<div class="name">${displayName}</div>`;
  document.getElementById("auth").innerHTML = `${avatarHtml}${nameHtml}`;
};

window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "0ab74019e8b84a7cb3d4e05d0f101130",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-theta-ten.vercel.app/token.html",
      },
      "https://oauth-master-class-theta-ten.vercel.app",
{
        parentId: "buttonContainer",
        view: "button",
        buttonTheme: "light",
        buttonSize: "xs",
        buttonBorderRadius: 20,
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        console.log("Сообщение с токеном(от кнопки): ", data);
        const result = await fetchYandexData(data.access_token);
        console.log("Сообщение с ответом Яндекса(от кнопки): ", result);
        authorize(result);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
};
