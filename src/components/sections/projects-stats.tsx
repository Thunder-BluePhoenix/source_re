export function ProjectsStats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Project Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">97%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">$2M+</div>
            <div className="text-sm text-muted-foreground">Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
