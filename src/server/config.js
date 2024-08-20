require('dotenv').config({ path: 'D:/monkCASE/.env' });
//Getting global variables from .env
const PORT = process.env.PORT;
const client_Id = process.env.Client_ID;
const client_Secret = process.env.Client_secret;
const url_Api = process.env.Url_API;
const Ed_Sheeran = process.env.Ed_Sheeran;
const Queen = process.env.Queen;
const Ariana_Grande = process.env.Ariana_Grande;
const Maroon_5 = process.env.Maroon_5;
const Imagine_Dragons = process.env.Imagine_Dragons;
const Eminem = process.env.Eminem;
const Lady_Gaga = process.env.Lady_Gaga;
const Cold_Play = process.env.Cold_Play;
const Beyonce = process.env.Beyonce;
const Bruno_Mars = process.env.Bruno_Mars;
const Rihanna = process.env.Rihanna;
const Shakira = process.env.Shakira;
const Justin_Bieber = process.env.Justin_Bieber;
const Demi_Lovato = process.env.Demi_Lovato;
const Taylor_Swift = process.env.Taylor_Swift;
const url_ApiArtists = process.env.Url_Api_Artists;

module.exports = {
    client_Id,
    client_Secret,
    url_Api,
    Ed_Sheeran,
    Queen,
    Ariana_Grande,
    Maroon_5,
    Imagine_Dragons,
    Eminem,
    Lady_Gaga,
    Cold_Play,
    Beyonce,
    Bruno_Mars,
    Rihanna,
    Shakira,
    Justin_Bieber,
    Demi_Lovato,
    Taylor_Swift,
    url_ApiArtists,
    PORT
};


