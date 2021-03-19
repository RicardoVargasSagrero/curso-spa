const resolveRoutes = (route) => {
  if(route.length <= 3){
    /* Si esto es verdadero regresa route */
    let validRoute = route === '/' ? route: '/:id';
    return validRoute;
  }
  return route; //about
};

export default resolveRoutes;
