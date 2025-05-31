// data/papers.js
const papersData = [
    {
        title: "Enhancing Visually-Rich Document Understanding via Layout Structure Modeling",
        authors: "Qiwei Li, Zuchao Li, Xiantao Cai, Bo Du, Hai Zhao",
        conference: "MM",
        paperLink: "https://dl.acm.org/doi/abs/10.1145/3581783.3612327",
        github: "https://github.com/Line-Kite/GraphLayoutLM",
        posterPdf: "data/papers/pdfs/mm23.pdf",
        year: "2023"
    },
    {
        title: "Hypergraph based Understanding for Document Semantic Entity Recognition",
        authors: "Qiwei Li, Zuchao Li, Ping Wang, Haojun Ai, Hai Zhao",
        conference: "ACL",
        paperLink: "https://aclanthology.org/2024.acl-long.162/",
        github: "https://github.com/Line-Kite/HGALayoutLM",
        posterPdf: "data/papers/pdfs/acl24.pdf",
        year: "2024"
    },
    {
        title: "DSDRNet: Disentangling Representation and Reconstruct Network for Domain Generalization",
        authors: "Juncheng Yang, Qiwei Li, Shuai Xie, Wei Yu, Shijun Li",
        conference: "IJCNN",
        paperLink: "https://ieeexplore.ieee.org/abstract/document/10651307/",
        year: "2024"
    },
    {
        title: "From Static to Dynamic: A Deeper, Faster, and Adaptive Language Modeling Approach",
        authors: "Jiajia Li, Qiwei Li, Ping Wang",
        conference: "IJCNN",
        paperLink: "https://ieeexplore.ieee.org/document/10650050",
        // github: "https://github.com/kite-line/kg-ie",
        posterPdf: "data/papers/pdfs/ijcnn24.pdf",
        year: "2024"
    }
];

// 暴露数据给其他脚本
window.papersData = papersData;
