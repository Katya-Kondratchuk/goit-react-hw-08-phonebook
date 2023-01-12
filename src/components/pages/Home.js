const styles = {
  container: {
    minHeight: 'calc(34vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
    width: '600px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Please register or login to view the contact book
      </h1>
    </div>
  );
}
