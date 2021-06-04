export default function RouteWithLayouts({
  layout: Layout,
  component: Component,
}) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
