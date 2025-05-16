
export const InfoSection = () => {
  return (
    <div className="bg-secondary/20 border border-border rounded-xl p-8 mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">how it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-medium mb-2">apply for projects</h3>
            <p className="text-sm text-muted-foreground">
              Browse and apply for projects that match your skills and interests
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-medium mb-2">complete the work</h3>
            <p className="text-sm text-muted-foreground">
              Work with guidance from mentors to deliver high-quality results
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-medium mb-2">get paid & showcase</h3>
            <p className="text-sm text-muted-foreground">
              Earn compensation and add your work to your professional portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
