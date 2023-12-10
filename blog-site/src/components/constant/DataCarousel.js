export const DATA_CAROUSEL = [
    {
      img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      tag: "Techonology",
      desc: "Grid system for better Design User Interface",
      date: "August 20, 2022",
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        tag: "Design",
        desc: "Grid system for better Design User Interface",
        date: "August 20, 2022",
      },
      {
        img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        tag: "Travel",
        desc: "Grid system for better Design User Interface",
        date: "August 20, 2022",
      },
  ];const Home = () => {
    const [articleData, setArticleData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredArticleData, setFilteredArticleData] = useState([]);
    const [articleCount, setArticleCount] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const carouselRef = useRef(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(api);
          setArticleData(response.data);
        } catch (err) {
          console.log('Error', err);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      setFilteredArticleData(articleData);
      setCategories([...new Set(articleData.map((item) => item.tags))]);
    }, [articleData]);
  
    const filterByCategory = (itemData, category) => {
      if (category && category === "all") {
        setFilteredArticleData(articleData);
        return;
      }
      const filterData = articleData.filter((item) => item.tags === itemData);
      setFilteredArticleData(filterData);
    };
  
    const handleLoadMore = () => {
      setArticleCount((prev) => prev + 3);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + articleData.length) % articleData.length);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articleData.length);
    };
  
    return (
      <main className="w-full">
        <Navbar />
  
        <div className="flex items-center flex-col mt-[100px]">
          <div ref={carouselRef} className="carousel-container">
            {articleData.map((e, index) => (
              <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                <img src={e.social_image} alt={e.title} />
              </div>
            ))}
          </div>
          <div className="flex justify-end w-[1180px]">
            <button onClick={prevSlide} className="rounded-[6px] border-[1px] p-[10px]">{"<"}</button>
            <button onClick={nextSlide} className="rounded-[6px] border-[1px] p-[10px]">{">"}</button>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <p className="flex justify-start w-[1540px] font-bold text-[24px]">
            Trending
          </p>
          {dataTrending.map((e) => (
            <div key={e.tag}>
              <Trend img={e.img} desc={e.desc} tag={e.tag} />
            </div>
          ))}
        </div>
        <div className="flex items-center flex-col mt-[100px]">
          <p className="flex justify-start w-[1440px] font-bold text-[24px]">
            All Blog Post
          </p>
          <div className="flex justify-between w-full px-[352px] mt-[32px]">
            <div className="flex gap-[20px]">
              <button
                onClick={() => filterByCategory("", "all")}
                className="text-[12px] font-sans font-[700] text-[#D4A373]"
              >
                All
              </button>
              {categories &&
                categories.map((item) => (
                  <button
                    key={item}
                    className="text-[12px] font-sans font-[700] text-[#495057]"
                    onClick={() => {
                      filterByCategory(item);
                    }}
                  >
                    {item}
                  </button>
                ))}
            </div>
            <button className="text-[12px] font-sans font-[700] text-[#495057]">
              View All
            </button>
          </div>
          <div className="flex justify-center mt-[32px] gap-[20px] w-[1216px] flex-wrap">
            {filteredArticleData &&
              filteredArticleData.slice(0, articleCount).map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  social_image={item.social_image}
                  tag={item.tag}
                  title={item.title}
                  tags={item.tags}
                  readable_publish_date={item.readable_publish_date}
                />
              ))}
          </div>
          {articleCount < filteredArticleData.length && (
            <button
              onClick={handleLoadMore}
              className="px-[20px] py-[12px] border-[1px] mt-[20px] rounded-[6px] font-sans text-[16px] font-[600] text-[#696A75]"
            >
              Load More
            </button>
          )}
        </div>
        <Footer />
      </main>
    );
  };
  
  export default Home;