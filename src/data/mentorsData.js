// change eith original data

const mentorsData = [
    {
        name: "Shuvam Manna",
            linkedIn: "https://www.linkedin.com/in/shuvam-manna/",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQHW8fmOMT54wQ/profile-displayphoto-shrink_800_800/0/1595071664942?e=1611792000&v=beta&t=er3v-WNwYMkGNFBO9tPC7F9LO3mFOv39RnbSkRw7UsY"
    },
    {
        name: "Sagar Choudhary",
            linkedIn: "https://www.linkedin.com/in/sagarchoudhary96/",
        img: "https://media-exp1.licdn.com/dms/image/C5103AQH_j1-6UR9Nnw/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=_bxFva2ZA8TcmIBbEPgIDeyeVOfGquP-jnIh7-5yXos"
    },
    {
        name: "Chetan Kaushik",
            linkedIn: "https://www.linkedin.com/in/chetankaushik/",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQFN8dvZ_i_YLg/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=FzNI80BX5X0TKliN-z_imuEsFIPTXSVmXhGFpPZBD78"
    },
    {
        name: "Anup Kumar Panwar",
            linkedIn: "https://www.linkedin.com/in/anupkumarpanwar/",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQHZMMM7Au8A-Q/profile-displayphoto-shrink_800_800/0/1589787083411?e=1611792000&v=beta&t=o9nW0hzFdxy7WFrCIiqyylpG7IMFBwN2zF7cCuItVe4"
    },
    {
        name: "Divyansh Chaurasia",
            linkedIn: "https://www.linkedin.com/in/asdivyansh/",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEooPtajjPqhg/profile-displayphoto-shrink_800_800/0/1601301401111?e=1611792000&v=beta&t=qnPolXrUPr5WtDWn2q_NKvUa6wgTj8RLvZMf8gevDBA"
    },
    {
        name: "Saurabh Thakur",
            linkedIn: "https://www.linkedin.com/in/thakursaurabh1998/",
        img: "https://media-exp1.licdn.com/dms/image/C5103AQEfHa_EjOHUgQ/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=8IrSXWH0olCgVi3kTIJrsixB8d2XU1ruFNJTq-ztgcw"
    },
    {
        name: "Aashutosh Rathi",
            linkedIn: "https://www.linkedin.com/in/aashutoshrathi/",
        img: "https://media-exp1.licdn.com/dms/image/C5103AQFtC8CwFz5ejQ/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=eEidkIzHVqLMsG1Fiwt7q2T1o1nMHyJK8P8J8or1_M8"
    },
    {
        name: "Kautuk Kundan",
            linkedIn: "https://www.linkedin.com/in/kautuk-kundan/",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQGvJZkzVcyJ8w/profile-displayphoto-shrink_800_800/0/1594031647890?e=1611792000&v=beta&t=iJh0P6xErTgRgbjPivAXDMJ5syGHCrwDOoW1ggcuy-8"
    },
    {
        name: "Abhay Sharma",
            linkedIn: "https://www.linkedin.com/in/abhay-stark/",
        img: "https://media-exp1.licdn.com/dms/image/C5103AQHluL-YagRSvw/profile-displayphoto-shrink_800_800/0/1586371787409?e=1611792000&v=beta&t=Oy9BAvuQw61tX_46ReYJyyPVDNkZRZGjpgXxdkR6IBk"
    },
    {
        name: "Harsha Vardhan",
            linkedIn: "https://www.linkedin.com/in/harsha-balanagu/",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQHtzDf5qD9R4w/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=6tw0I1nkZcQOcaxMJpsUSVES_mooy0Bn0ROYeNxNvZw"
    },
    {
        name: "Sai Siddartha Maram",
            linkedIn: "https://www.linkedin.com/in/sai-siddartha-maram/",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQEntiTDRj3-BA/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=pmhnqF1Zd7wwjkAfwWBOrSdXxQFvblSkVw5V3deprjU"
    },
    {
        name: "Ayon Roy",
            linkedIn: "https://www.linkedin.com/in/ayonroy2000/",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEEaTnOiP1cIQ/profile-displayphoto-shrink_800_800/0/1596388597395?e=1611792000&v=beta&t=c8hMwFjAsfX_PH8TeJ8WYhMDFMrQqn_AWpn0DeT4JxU"
    },
    {
        name: "Arsh Goyal",
            linkedIn: "https://www.linkedin.com/in/arshgoyal/",
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQGUeamH4QmXcw/profile-displayphoto-shrink_800_800/0?e=1611792000&v=beta&t=VuDt8hg7NLLPq6v-j8aJXq_pvMYusYNAEGRKyRCTbvE"
    },
    {
        name: "Naveen S",
            linkedIn: "https://www.linkedin.com/in/naveen-s/",
        img: "https://media-exp1.licdn.com/dms/image/C5103AQEYgaaB1O17VA/profile-displayphoto-shrink_800_800/0/1568339728800?e=1611792000&v=beta&t=t-Zws-T6a99TxFb_Kv0lpM7G5XTs30HghbGsAygHY1I"
    }
]

export default mentorsData