import { CubeIcon, LayersIcon, RocketIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import Reveal from '@/components/Reveal'

const icons = [CubeIcon, LayersIcon, RocketIcon, LightningBoltIcon] as const

const services = [
  {
    title: 'Pre-Inspection and Readiness Audit',
    description:
      'Comprehensive onboard or remote assessments simulating PSC, Flag, SIRE 2.0, CDI, and RightShip inspections to identify and correct gaps before external audits.'
  },
  {
    title: 'Vessel Pre-Purchase and Condition Surveys',
    description:
      'Detailed technical and compliance evaluations supporting acquisition and entry-into-management decisions, complete with risk, class, and cost assessments.'
  },
  {
    title: 'Deficiency Management and Reporting',
    description:
      'Post-inspection follow-up, corrective action tracking, and drafting of official responses to authorities to close findings efficiently and protect the company’s record.'
  },
  {
    title: 'Safety Management System Development (ISM)',
    description:
      'Creation and revision of onboard SMS manuals, checklists, and policies aligned with ISM Code and company safety objectives, ready for Class or Flag approval.'
  },
  {
    title: 'Remote Inspections and Digital Verification',
    description:
      'Structured photo and video protocols for remote compliance verification, providing real-time oversight and data-driven transparency without travel delays.'
  },
  {
    title: 'Crisis Management and Maritime Consulting',
    description:
      'Expert advisory support during incidents, detentions, or vetting failures, including root-cause analysis, preventive measures, and post-incident training.'
  },
  {
    title: 'Continuous Compliance Monitoring',
    description:
      'Quarterly or monthly fleet reviews with trend analysis, KPI dashboards, and improvement recommendations to maintain inspection-ready condition year-round.'
  }
] as const

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl">Services</h2>
            <p className="mt-3 text-maritime-navy/80 dark:text-maritime-mist/80">
              OmniVessel provides a complete suite of compliance and inspection services designed to keep your fleet fully prepared for any third-party audit. Our team ensures every vessel meets international standards through proactive inspections, documentation support, remote verification, and strategic consulting.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description }, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <Reveal key={title} delayClass={["delay-100","delay-200","delay-300","delay-500"][idx % 4]}>
                <div
                  className="group relative rounded-xl border border-maritime-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-maritime-ocean/10 text-maritime-ocean">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-maritime-navy/80 dark:text-maritime-mist/80">{description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
