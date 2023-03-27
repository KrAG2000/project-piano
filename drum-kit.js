let NumberOfKeys = document.querySelectorAll(".common-key-class").length;
console.log(NumberOfKeys);
for (let i = 0; i < NumberOfKeys; i++) {
    document.querySelectorAll(".common-key-class")[i].addEventListener("click", () => {
        let button = this.innerHTML;
        if (button != null) console.log(button);
        else console.log("Unable to get button value: ", button);

        switch (button) {
            case "CsDb":
                let CsDb = new Audio("./resources/piano-c_Cs_major.mp3");
                CsDb.play();
                break;

            case "DsEb":
                let DsEb = new Audio("./resources/piano-e_Ds_major.mp3");
                DsEb.play();
                break;

            case "FsGb":
                let FsGb = new Audio("./resources/piano-f_Fs_major.mp3");
                FsGb.play();
                break;
            case "GsAb":
                let GsAb = new Audio("./resources/piano-g_Gs_major.mp3");
                GsAb.play();
                break;

            case "AsBb":
                let AsBb = new Audio("./resources/piano-b_As_major.mp3");
                AsBb.play();
                break;

            case "CsDb_hp":
                let CsDb_hp = new Audio("./resources/piano-c_Cs_major.mp3");
                CsDb_hp.play();
                break;

            case "DsEb_hp":
                let DsEb_hp = new Audio("./resources/piano-e_Ds_major.mp3");
                DsEb_hp.play();
                break;

            case "C-Flat":
                let Cf = new Audio("./resources/piano-mp3/C3.mp3");
                Cf.play();
                break;

            case "D-Flat":
                let Df = new Audio("./resources/piano-mp3/D3.mp3");
                Df.play();
                break;

            case "E-Flat":
                let Ef = new Audio("./resources/piano-mp3/E3.mp3");
                Ef.play();
                break;

            case "F-Flat":
                let Ff = new Audio("./resources/piano-mp3/F3.mp3");
                Ff.play();
                break;

            case "G-Flat":
                let Gf = new Audio("./resources/piano-mp3/G3.mp3");
                Gf.play();
                break;

            case "A-Flat":
                let Af = new Audio("./resources/piano-mp3/A4.mp3");
                Af.play();
                break;

            case "B-Flat":
                let Bf = new Audio("./resources/piano-mp3/B4.mp3");
                Bf.play();
                break;

            case "C-Flat-H":
                let Cf_h = new Audio("./resources/piano-mp3/C4.mp3");
                Cf_h.play();
                break;

            case "D-Flat-H":
                let Df_h = new Audio("./resources/piano-mp3/D4.mp3");
                Df_h.play();
                break;

            case "E-Flat-H":
                let Ef_h = new Audio("./resources/piano-mp3/E4.mp3");
                Ef_h.play();
                break;

            default:
                console.log("Something seems wrong!")
                break;
        }
    });
}

document.addEventListener("keydown", (event) => {
    let button = event.key;
    console.log(button);

    switch (button) {
        case "a":
            let Cf = new Audio("./resources/piano-mp3/C3.mp3");
            Cf.play();
            break;

        case "s":
            let Df = new Audio("./resources/piano-mp3/D3.mp3");
            Df.play();
            break;

        case "d":
            let Ef = new Audio("./resources/piano-mp3/E3.mp3");
            Ef.play();
            break;

        case "f":
            let Ff = new Audio("./resources/piano-mp3/F3.mp3");
            Ff.play();
            break;

        case "g":
            let Gf = new Audio("./resources/piano-mp3/G3.mp3");
            Gf.play();
            break;

        case "h":
            let Af = new Audio("./resources/piano-mp3/A4.mp3");
            Af.play();
            break;

        case "j":
            let Bf = new Audio("./resources/piano-mp3/B4.mp3");
            Bf.play();
            break;

        case "k":
            let Cf_h = new Audio("./resources/piano-mp3/C4.mp3");
            Cf_h.play();
            break;

        case "l":
            let Df_h = new Audio("./resources/piano-mp3/D4.mp3");
            Df_h.play();
            break;

        case ";":
            let Ef_h = new Audio("./resources/piano-mp3/E4.mp3");
            Ef_h.play();
            break;

        case "w":
            let CsDb = new Audio("./resources/piano-mp3/Db3.mp3");
            CsDb.play();
            break;

        case "e":
            let DsEb = new Audio("./resources/piano-mp3/Eb3.mp3");
            DsEb.play();
            break;

        case "t":
            let FsGb = new Audio("./resources/piano-mp3/Gb3.mp3");
            FsGb.play();
            break;

        case "y":
            let GsAb = new Audio("./resources/piano-mp3/Ab4.mp3");
            GsAb.play();
            break;

        case "u":
            let AsBb = new Audio("./resources/piano-mp3/Bb4.mp3");
            AsBb.play();
            break;

        case "o":
            let CsDb_hp = new Audio("./resources/piano-mp3/Db4.mp3");
            CsDb_hp.play();
            break;

        case "p":
            let DsEb_hp = new Audio("./resources/piano-mp3/Eb4.mp3");
            DsEb_hp.play();
            break;

        default:
            console.log("Something seems wrong!");
            break;
    }
});