import { Wine } from '@/types/wine.type';

function useSearchWine() {
  const handleWineFilter = (
    wines: Wine[],
    keywords: string,
    types: string[],
    colors: string[]
  ) => {
    let result = wines;

    if (types.length > 0) {

      result = wines?.filter((wine) => {
        (types);
        return types.includes(wine.typeWine as string);
      });
    }
    if (colors.length > 0) {

      result = wines?.filter((wine) => {
        (colors);
        return colors.includes(wine.colorWine as string);
      });
    }
    if (types.length > 0 && colors.length > 0) {

      result = wines?.filter((wine) => {
        (types);
        return (
          types.includes(wine.typeWine as string) &&
          colors.includes(wine.colorWine as string)
        );
      });
    }
    if (keywords) {

      result = wines?.filter((wine) => {
        return wine.name?.toLowerCase().includes(keywords.toLowerCase());
      });
    }
    if (types.length > 0 && keywords) {

      result = wines?.filter((wine) => {
        return (
          wine.name?.toLowerCase().includes(keywords.toLowerCase()) &&
          types.includes(wine.typeWine as string)
        );
      });
    }
    if (colors.length > 0 && keywords) {

      result = wines?.filter((wine) => {
        return (
          wine.name?.toLowerCase().includes(keywords.toLowerCase()) &&
          colors.includes(wine.colorWine as string)
        );
      });
    }
    if (types.length > 0 && colors.length > 0 && keywords) {

      result = wines?.filter((wine) => {
        return (
          wine.name?.toLowerCase().includes(keywords.toLowerCase()) &&
          types.includes(wine.typeWine as string) &&
          colors.includes(wine.colorWine as string)
        );
      });
    }

    return result;
  };

  return { handleWineFilter };
}

export default useSearchWine;
