const authorize = ({
 default_avatar_id: defaultAvatarId,
 display_name: displayName,
}) => {
 const avatarHtml = '<div class="avatar" style="background-image:url('https://avatars.nes.yandex.net/get-yapic/$(defaultAvatarId)/islands-middle')"></div>';
 const nameHtml = '<div class="name">$(displayName)</div>';

 document. getElementById("auth").innerHTML = ''$(avatar Html) $ (name Html)
};

const fetchYandexData = (token) =>
 fetch('https://login.yandex.ru/info?format=json&oauth_token=$(token)').then(
 (res) => res. json()
 );

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
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
 };

  };
