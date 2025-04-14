import CategoryCard from "./CategoryCard";

// Array of object called caregories
const categories = [
  {
    id: 1,
    name: "Technology",
    description: "Latest trends and innovations in technology.",
    imageUrl: "/src/assets/image/one.jpg",
  },

  {
    id: 2,
    name: "Helath",
    description: "Health and wellness tips for a better life.",
    imageUrl: "/src/assets/image/two.jpg",
  },

  {
    id: 3,
    name: "Business",
    description: "Insights and strategies for business success.",
    imageUrl: "/src/assets/image/three.jpg",
  },

  {
    id: 4,
    name: "Lifestyle",
    description: "Exploring the latest in lifestyle and culture.",
    imageUrl: "/src/assets/image/four.jpg",
  },
];

// CartegoryContainer component, that will display all the category cards

const CategoryContainer = () => {
  // This is the container component that will display all the category cards
  return (
    <div className="category_contaner">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          description={category.description}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
